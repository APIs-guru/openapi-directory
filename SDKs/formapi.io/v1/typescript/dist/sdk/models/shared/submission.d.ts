import { SpeakeasyBase } from "../../../internal/utils";
import { SubmissionAction } from "./submissionaction";
import { SubmissionDataRequest } from "./submissiondatarequest";
export declare enum SubmissionStateEnum {
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
export declare class Submission extends SpeakeasyBase {
    actions?: SubmissionAction[];
    batchId?: string;
    data?: Map<string, any>;
    dataRequests?: SubmissionDataRequest[];
    downloadUrl?: string;
    editable?: boolean;
    expired: boolean;
    expiresAt?: string;
    id: string;
    metadata?: Map<string, any>;
    pdfHash?: string;
    permanentDownloadUrl?: string;
    processedAt?: string;
    referrer?: string;
    source?: string;
    state: SubmissionStateEnum;
    templateId?: string;
    test: boolean;
    truncatedText?: Map<string, any>;
}
