import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}


export class CombinePdfsCombinePdfsDataSourcePdfs1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum;
}

export enum CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombinePdfsCombinePdfsDataSourcePdfs2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CombinePdfsCombinePdfsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_custom_files" })
  deleteCustomFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source_pdfs" })
  sourcePdfs: any[];

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class CombinePdfsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction })
  actions?: shared.CombinedSubmissionAction[];

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pdf_hash" })
  pdfHash?: string;

  @SpeakeasyMetadata({ data: "json, name=source_pdfs" })
  sourcePdfs: any[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}

export enum CombinePdfsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class CombinePdfsCreateCombinedSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combined_submission" })
  combinedSubmission: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CombinePdfsCreateCombinedSubmissionResponseStatusEnum;
}


export class CombinePdfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CombinePdfsCombinePdfsData;

  @SpeakeasyMetadata()
  security: CombinePdfsSecurity;
}


export class CombinePdfsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createCombinedSubmissionResponse?: CombinePdfsCreateCombinedSubmissionResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  invalidRequest?: shared.InvalidRequest;
}
