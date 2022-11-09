import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum {
    Submission = "submission"
,    CombinedSubmission = "combined_submission"
,    Template = "template"
,    CustomFile = "custom_file"
}


export class CombinePdfsCombinePdfsDataSourcePdfs1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum;
}

export enum CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombinePdfsCombinePdfsDataSourcePdfs2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CombinePdfsCombinePdfsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete_custom_files" })
  deleteCustomFiles?: boolean;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=source_pdfs" })
  sourcePdfs: any[];

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class CombinePdfsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CombinePdfsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CombinePdfsCombinePdfsData;

  @Metadata()
  security: CombinePdfsSecurity;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission"
,    CombinedSubmission = "combined_submission"
,    Template = "template"
,    CustomFile = "custom_file"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction })
  actions?: shared.CombinedSubmissionAction[];

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=expired" })
  expired: boolean;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=pdf_hash" })
  pdfHash?: string;

  @Metadata({ data: "json, name=source_pdfs" })
  sourcePdfs: any[];

  @Metadata({ data: "json, name=state" })
  state: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;

  @Metadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}

export enum CombinePdfsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class CombinePdfsCreateCombinedSubmissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=combined_submission" })
  combinedSubmission: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: CombinePdfsCreateCombinedSubmissionResponseStatusEnum;
}


export class CombinePdfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createCombinedSubmissionResponse?: CombinePdfsCreateCombinedSubmissionResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  invalidRequest?: shared.InvalidRequest;
}
