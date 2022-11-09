import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubmissionBatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=submission_batch_id" })
  submissionBatchId: string;
}


export class GetSubmissionBatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_submissions" })
  includeSubmissions?: boolean;
}


export class GetSubmissionBatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetSubmissionBatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubmissionBatchPathParams;

  @Metadata()
  queryParams: GetSubmissionBatchQueryParams;

  @Metadata()
  security: GetSubmissionBatchSecurity;
}

export enum GetSubmissionBatchSubmissionBatchStateEnum {
    Pending = "pending"
,    Processed = "processed"
,    Error = "error"
}


export class GetSubmissionBatchSubmissionBatch extends SpeakeasyBase {
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
  state: GetSubmissionBatchSubmissionBatchStateEnum;

  @Metadata({ data: "json, name=submissions", elemType: shared.Submission })
  submissions?: shared.Submission[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class GetSubmissionBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  submissionBatch?: GetSubmissionBatchSubmissionBatch;
}
