import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExpireSubmissionPathParams extends SpeakeasyBase {
    submissionId: string;
}
export declare class ExpireSubmissionSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class ExpireSubmissionRequest extends SpeakeasyBase {
    pathParams: ExpireSubmissionPathParams;
    security: ExpireSubmissionSecurity;
}
export declare class ExpireSubmissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    submission?: shared.Submission;
}
