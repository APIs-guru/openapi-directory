import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionBatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_batch_id" })
  submissionBatchId: string;
}


export class GetSubmissionBatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_submissions" })
  includeSubmissions?: boolean;
}


export class GetSubmissionBatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum GetSubmissionBatchSubmissionBatchStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class GetSubmissionBatchSubmissionBatch extends SpeakeasyBase {
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
  state: GetSubmissionBatchSubmissionBatchStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissions", elemType: shared.Submission })
  submissions?: shared.Submission[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class GetSubmissionBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionBatchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubmissionBatchQueryParams;

  @SpeakeasyMetadata()
  security: GetSubmissionBatchSecurity;
}


export class GetSubmissionBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  submissionBatch?: GetSubmissionBatchSubmissionBatch;
}
