import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGeneratePdfV1PathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class BatchGeneratePdfV1Security extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum BatchGeneratePdfV1CreateSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class BatchGeneratePdfV1CreateSubmissionResponse extends SpeakeasyBase {
    errors?: string[];
    status: BatchGeneratePdfV1CreateSubmissionResponseStatusEnum;
    submission: shared.Submission;
}
export declare class BatchGeneratePdfV1Request extends SpeakeasyBase {
    pathParams: BatchGeneratePdfV1PathParams;
    request: Map<string, any>[];
    security: BatchGeneratePdfV1Security;
}
export declare class BatchGeneratePdfV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    createSubmissionResponses?: BatchGeneratePdfV1CreateSubmissionResponse[];
    error?: shared.Error;
    invalidRequests?: shared.InvalidRequest[];
}
