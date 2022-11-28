import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataRequestPathParams extends SpeakeasyBase {
    dataRequestId: string;
}
export declare class GetDataRequestSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class GetDataRequestRequest extends SpeakeasyBase {
    pathParams: GetDataRequestPathParams;
    security: GetDataRequestSecurity;
}
export declare class GetDataRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    submissionDataRequest?: shared.SubmissionDataRequest;
}
