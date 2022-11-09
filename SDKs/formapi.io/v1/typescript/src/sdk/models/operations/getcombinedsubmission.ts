import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCombinedSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" })
  combinedSubmissionId: string;
}


export class GetCombinedSubmissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetCombinedSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCombinedSubmissionPathParams;

  @Metadata()
  security: GetCombinedSubmissionSecurity;
}

export enum GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission"
,    CombinedSubmission = "combined_submission"
,    Template = "template"
,    CustomFile = "custom_file"
}


export class GetCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class GetCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum GetCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class GetCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
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
  state: GetCombinedSubmissionCombinedSubmissionStateEnum;

  @Metadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}


export class GetCombinedSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  combinedSubmission?: GetCombinedSubmissionCombinedSubmission;

  @Metadata()
  error?: shared.Error;
}
