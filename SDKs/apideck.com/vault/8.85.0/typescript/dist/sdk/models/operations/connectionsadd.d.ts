import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectionsAddPathParams extends SpeakeasyBase {
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsAddRequest extends SpeakeasyBase {
    pathParams: ConnectionsAddPathParams;
    headers: ConnectionsAddHeaders;
    request: shared.ConnectionInput;
    security: ConnectionsAddSecurity;
}
export declare class ConnectionsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createConnectionResponse?: shared.CreateConnectionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
