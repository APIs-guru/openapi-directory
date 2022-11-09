import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsAllQueryParams extends SpeakeasyBase {
    api?: string;
    configured?: boolean;
}
export declare class ConnectionsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsAllRequest extends SpeakeasyBase {
    queryParams: ConnectionsAllQueryParams;
    headers: ConnectionsAllHeaders;
    security: ConnectionsAllSecurity;
}
export declare class ConnectionsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getConnectionsResponse?: shared.GetConnectionsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
