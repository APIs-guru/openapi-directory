import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiResourcesOnePathParams extends SpeakeasyBase {
    id: string;
    resourceId: string;
}
export declare class ApiResourcesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ApiResourcesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApiResourcesOneRequest extends SpeakeasyBase {
    pathParams: ApiResourcesOnePathParams;
    headers: ApiResourcesOneHeaders;
    security: ApiResourcesOneSecurity;
}
export declare class ApiResourcesOneResponse extends SpeakeasyBase {
    contentType: string;
    getApiResourceResponse?: shared.GetApiResourceResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
