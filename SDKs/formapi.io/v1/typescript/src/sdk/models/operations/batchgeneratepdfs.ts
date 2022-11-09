import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=template_id" })
  templateId: string;

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class BatchGeneratePdfsSubmissionBatchData extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=submissions", elemType: operations.BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest })
  submissions: BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest[];

  @Metadata({ data: "json, name=template_id" })
  templateId?: string;

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class BatchGeneratePdfsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class BatchGeneratePdfsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: BatchGeneratePdfsSubmissionBatchData;

  @Metadata()
  security: BatchGeneratePdfsSecurity;
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum {
    Success = "success"
,    Error = "error"
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion_percentage" })
  completionPercentage: number;

  @Metadata({ data: "json, name=error_count" })
  errorCount: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: Map<string, any>;

  @Metadata({ data: "json, name=pending_count" })
  pendingCount: number;

  @Metadata({ data: "json, name=processed_at" })
  processedAt: string;

  @Metadata({ data: "json, name=state" })
  state: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum;

  @Metadata({ data: "json, name=submissions", elemType: shared.Submission })
  submissions?: shared.Submission[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}

export enum BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum {
    Success = "success"
,    Error = "error"
,    ValidButNotSaved = "valid_but_not_saved"
}


export class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum;

  @Metadata({ data: "json, name=submission" })
  submission?: shared.Submission;
}


export class BatchGeneratePdfsCreateSubmissionBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum;

  @Metadata({ data: "json, name=submission_batch" })
  submissionBatch: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch;

  @Metadata({ data: "json, name=submissions", elemType: operations.BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse })
  submissions: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse[];
}


export class BatchGeneratePdfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createSubmissionBatchResponse?: BatchGeneratePdfsCreateSubmissionBatchResponse;

  @Metadata()
  error?: shared.Error;
}
