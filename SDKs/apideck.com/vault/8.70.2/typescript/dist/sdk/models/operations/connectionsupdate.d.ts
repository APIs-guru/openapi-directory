import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsUpdatePathParams extends SpeakeasyBase {
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsUpdateRequest extends SpeakeasyBase {
    pathParams: ConnectionsUpdatePathParams;
    headers: ConnectionsUpdateHeaders;
    request: shared.Connection;
    security: ConnectionsUpdateSecurity;
}
export declare class ConnectionsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateConnectionResponse?: shared.UpdateConnectionResponse;
}
