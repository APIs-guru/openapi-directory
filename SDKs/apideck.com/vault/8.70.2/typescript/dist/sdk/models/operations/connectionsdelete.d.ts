import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsDeletePathParams extends SpeakeasyBase {
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsDeleteRequest extends SpeakeasyBase {
    pathParams: ConnectionsDeletePathParams;
    headers: ConnectionsDeleteHeaders;
    security: ConnectionsDeleteSecurity;
}
export declare class ConnectionsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
