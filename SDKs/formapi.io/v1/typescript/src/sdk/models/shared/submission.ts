import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubmissionAction } from "./submissionaction";
import { SubmissionDataRequest } from "./submissiondatarequest";

export enum SubmissionStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    InvalidData = "invalid_data"
,    Error = "error"
,    ImageDownloadFailed = "image_download_failed"
,    ImageProcessingFailed = "image_processing_failed"
,    WaitingForDataRequests = "waiting_for_data_requests"
,    SyntaxError = "syntax_error"
,    AccountSuspended = "account_suspended"
,    LicenseRevoked = "license_revoked"
,    Accidental = "accidental"
}


export class Submission extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.SubmissionAction })
  actions?: SubmissionAction[];

  @Metadata({ data: "json, name=batch_id" })
  batchId?: string;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=data_requests", elemType: shared.SubmissionDataRequest })
  dataRequests?: SubmissionDataRequest[];

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=editable" })
  editable?: boolean;

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

  @Metadata({ data: "json, name=permanent_download_url" })
  permanentDownloadUrl?: string;

  @Metadata({ data: "json, name=processed_at" })
  processedAt?: string;

  @Metadata({ data: "json, name=referrer" })
  referrer?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=state" })
  state: SubmissionStateEnum;

  @Metadata({ data: "json, name=template_id" })
  templateId?: string;

  @Metadata({ data: "json, name=test" })
  test: boolean;

  @Metadata({ data: "json, name=truncated_text" })
  truncatedText?: Map<string, any>;
}
