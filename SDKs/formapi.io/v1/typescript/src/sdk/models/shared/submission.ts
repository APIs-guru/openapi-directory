import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubmissionAction } from "./submissionaction";
import { SubmissionDataRequest } from "./submissiondatarequest";


export enum SubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    InvalidData = "invalid_data",
    Error = "error",
    ImageDownloadFailed = "image_download_failed",
    ImageProcessingFailed = "image_processing_failed",
    WaitingForDataRequests = "waiting_for_data_requests",
    SyntaxError = "syntax_error",
    AccountSuspended = "account_suspended",
    LicenseRevoked = "license_revoked",
    Accidental = "accidental"
}


export class Submission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: SubmissionAction })
  actions?: SubmissionAction[];

  @SpeakeasyMetadata({ data: "json, name=batch_id" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=data_requests", elemType: SubmissionDataRequest })
  dataRequests?: SubmissionDataRequest[];

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=editable" })
  editable?: boolean;

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

  @SpeakeasyMetadata({ data: "json, name=permanent_download_url" })
  permanentDownloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=processed_at" })
  processedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: SubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test: boolean;

  @SpeakeasyMetadata({ data: "json, name=truncated_text" })
  truncatedText?: Map<string, any>;
}
