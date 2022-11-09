import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionSettingsAllPathParams extends SpeakeasyBase {
    resource: string;
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionSettingsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionSettingsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionSettingsAllRequest extends SpeakeasyBase {
    pathParams: ConnectionSettingsAllPathParams;
    headers: ConnectionSettingsAllHeaders;
    security: ConnectionSettingsAllSecurity;
}
export declare class ConnectionSettingsAllResponse extends SpeakeasyBase {
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
