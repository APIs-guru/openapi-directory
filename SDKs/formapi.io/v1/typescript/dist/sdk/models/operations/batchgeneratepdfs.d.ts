import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest extends SpeakeasyBase {
    css?: string;
    data: Map<string, any>;
    html?: string;
    metadata?: Map<string, any>;
    templateId: string;
    test?: boolean;
}
export declare class BatchGeneratePdfsSubmissionBatchData extends SpeakeasyBase {
    metadata?: Map<string, any>;
    submissions: BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest[];
    templateId?: string;
    test?: boolean;
}
export declare class BatchGeneratePdfsSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare enum BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}
export declare class BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch extends SpeakeasyBase {
    completionPercentage: number;
    errorCount: number;
    id: string;
    metadata: Map<string, any>;
    pendingCount: number;
    processedAt: string;
    state: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum;
    submissions?: shared.Submission[];
    totalCount: number;
}
export declare enum BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum {
    Success = "success",
    Error = "error",
    ValidButNotSaved = "valid_but_not_saved"
}
export declare class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse extends SpeakeasyBase {
    errors?: string[];
    status: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum;
    submission?: shared.Submission;
}
export declare class BatchGeneratePdfsCreateSubmissionBatchResponse extends SpeakeasyBase {
    error?: string;
    errors?: string[];
    status: BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum;
    submissionBatch: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch;
    submissions: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse[];
}
export declare class BatchGeneratePdfsRequest extends SpeakeasyBase {
    request: BatchGeneratePdfsSubmissionBatchData;
    security: BatchGeneratePdfsSecurity;
}
export declare class BatchGeneratePdfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createSubmissionBatchResponse?: BatchGeneratePdfsCreateSubmissionBatchResponse;
    error?: shared.Error;
}
