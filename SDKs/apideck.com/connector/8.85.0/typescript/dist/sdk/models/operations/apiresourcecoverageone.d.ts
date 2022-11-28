import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiResourceCoverageOnePathParams extends SpeakeasyBase {
    id: string;
    resourceId: string;
}
export declare class ApiResourceCoverageOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ApiResourceCoverageOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApiResourceCoverageOneRequest extends SpeakeasyBase {
    pathParams: ApiResourceCoverageOnePathParams;
    headers: ApiResourceCoverageOneHeaders;
    security: ApiResourceCoverageOneSecurity;
}
export declare class ApiResourceCoverageOneResponse extends SpeakeasyBase {
    contentType: string;
    getApiResourceCoverageResponse?: shared.GetApiResourceCoverageResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
