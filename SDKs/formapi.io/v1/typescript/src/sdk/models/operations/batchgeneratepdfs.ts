import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class BatchGeneratePdfsSubmissionBatchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=submissions", elemType: BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest })
  submissions: BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest[];

  @SpeakeasyMetadata({ data: "json, name=template_id" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class BatchGeneratePdfsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum {
    Success = "success",
    Error = "error"
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion_percentage" })
  completionPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=error_count" })
  errorCount: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pending_count" })
  pendingCount: number;

  @SpeakeasyMetadata({ data: "json, name=processed_at" })
  processedAt: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissions", elemType: shared.Submission })
  submissions?: shared.Submission[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum {
    Success = "success",
    Error = "error",
    ValidButNotSaved = "valid_but_not_saved"
}


export class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: shared.Submission;
}


export class BatchGeneratePdfsCreateSubmissionBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submission_batch" })
  submissionBatch: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch;

  @SpeakeasyMetadata({ data: "json, name=submissions", elemType: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse })
  submissions: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse[];
}


export class BatchGeneratePdfsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchGeneratePdfsSubmissionBatchData;

  @SpeakeasyMetadata()
  security: BatchGeneratePdfsSecurity;
}


export class BatchGeneratePdfsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createSubmissionBatchResponse?: BatchGeneratePdfsCreateSubmissionBatchResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
