import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectionsOnePathParams extends SpeakeasyBase {
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsOneRequest extends SpeakeasyBase {
    pathParams: ConnectionsOnePathParams;
    headers: ConnectionsOneHeaders;
    security: ConnectionsOneSecurity;
}
export declare class ConnectionsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getConnectionResponse?: shared.GetConnectionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
