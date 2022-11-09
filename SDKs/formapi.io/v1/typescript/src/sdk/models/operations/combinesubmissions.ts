import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CombineSubmissionsCombinedSubmissionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=submission_ids" })
  submissionIds: string[];

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class CombineSubmissionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CombineSubmissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CombineSubmissionsCombinedSubmissionData;

  @Metadata()
  security: CombineSubmissionsSecurity;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission"
,    CombinedSubmission = "combined_submission"
,    Template = "template"
,    CustomFile = "custom_file"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
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
  state: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;

  @Metadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class CombineSubmissionsCreateCombinedSubmissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=combined_submission" })
  combinedSubmission: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum;
}


export class CombineSubmissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createCombinedSubmissionResponse?: CombineSubmissionsCreateCombinedSubmissionResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  invalidRequest?: shared.InvalidRequest;
}
