import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionBatchPathParams extends SpeakeasyBase {
    submissionBatchId: string;
}
export declare class GetSubmissionBatchQueryParams extends SpeakeasyBase {
    includeSubmissions?: boolean;
}
export declare class GetSubmissionBatchSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum GetSubmissionBatchSubmissionBatchStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class GetSubmissionBatchSubmissionBatch extends SpeakeasyBase {
    completionPercentage: number;
    errorCount: number;
    id: string;
    metadata: Map<string, any>;
    pendingCount: number;
    processedAt: string;
    state: GetSubmissionBatchSubmissionBatchStateEnum;
    submissions?: shared.Submission[];
    totalCount: number;
}
export declare class GetSubmissionBatchRequest extends SpeakeasyBase {
    pathParams: GetSubmissionBatchPathParams;
    queryParams: GetSubmissionBatchQueryParams;
    security: GetSubmissionBatchSecurity;
}
export declare class GetSubmissionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    submissionBatch?: GetSubmissionBatchSubmissionBatch;
}
