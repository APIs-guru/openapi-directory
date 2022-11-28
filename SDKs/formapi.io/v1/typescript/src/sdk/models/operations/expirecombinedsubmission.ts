import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExpireCombinedSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" })
  combinedSubmissionId: string;
}


export class ExpireCombinedSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}


export class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum ExpireCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class ExpireCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
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
  state: ExpireCombinedSubmissionCombinedSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}


export class ExpireCombinedSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExpireCombinedSubmissionPathParams;

  @SpeakeasyMetadata()
  security: ExpireCombinedSubmissionSecurity;
}


export class ExpireCombinedSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  combinedSubmission?: ExpireCombinedSubmissionCombinedSubmission;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
