import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApisOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ApisOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ApisOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApisOneRequest extends SpeakeasyBase {
    pathParams: ApisOnePathParams;
    headers: ApisOneHeaders;
    security: ApisOneSecurity;
}
export declare class ApisOneResponse extends SpeakeasyBase {
    contentType: string;
    getApiResponse?: shared.GetApiResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
