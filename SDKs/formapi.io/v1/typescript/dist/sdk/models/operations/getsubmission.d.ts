import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubmissionPathParams extends SpeakeasyBase {
    submissionId: string;
}
export declare class GetSubmissionQueryParams extends SpeakeasyBase {
    includeData?: boolean;
}
export declare class GetSubmissionSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class GetSubmissionRequest extends SpeakeasyBase {
    pathParams: GetSubmissionPathParams;
    queryParams: GetSubmissionQueryParams;
    security: GetSubmissionSecurity;
}
export declare class GetSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    submission?: shared.Submission;
}
