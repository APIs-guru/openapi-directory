import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCombinedSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" })
  combinedSubmissionId: string;
}


export class GetCombinedSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}


export class GetCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class GetCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum GetCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class GetCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
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
  state: GetCombinedSubmissionCombinedSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}


export class GetCombinedSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCombinedSubmissionPathParams;

  @SpeakeasyMetadata()
  security: GetCombinedSubmissionSecurity;
}


export class GetCombinedSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  combinedSubmission?: GetCombinedSubmissionCombinedSubmission;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
