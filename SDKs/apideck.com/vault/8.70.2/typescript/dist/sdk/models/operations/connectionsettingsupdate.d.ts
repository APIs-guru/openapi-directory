import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionSettingsUpdatePathParams extends SpeakeasyBase {
    resource: string;
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionSettingsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionSettingsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionSettingsUpdateRequest extends SpeakeasyBase {
    pathParams: ConnectionSettingsUpdatePathParams;
    headers: ConnectionSettingsUpdateHeaders;
    request: shared.Connection;
    security: ConnectionSettingsUpdateSecurity;
}
export declare class ConnectionSettingsUpdateResponse extends SpeakeasyBase {
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
