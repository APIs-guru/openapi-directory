import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExpireCombinedSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" })
  combinedSubmissionId: string;
}


export class ExpireCombinedSubmissionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class ExpireCombinedSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExpireCombinedSubmissionPathParams;

  @Metadata()
  security: ExpireCombinedSubmissionSecurity;
}

export enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission"
,    CombinedSubmission = "combined_submission"
,    Template = "template"
,    CustomFile = "custom_file"
}


export class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum ExpireCombinedSubmissionCombinedSubmissionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class ExpireCombinedSubmissionCombinedSubmission extends SpeakeasyBase {
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
  state: ExpireCombinedSubmissionCombinedSubmissionStateEnum;

  @Metadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}


export class ExpireCombinedSubmissionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  combinedSubmission?: ExpireCombinedSubmissionCombinedSubmission;

  @Metadata()
  error?: shared.Error;
}
