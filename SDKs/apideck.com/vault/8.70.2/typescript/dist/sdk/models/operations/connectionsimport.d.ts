import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsImportPathParams extends SpeakeasyBase {
    serviceId: string;
    unifiedApi: string;
}
export declare class ConnectionsImportHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class ConnectionsImportSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectionsImportRequest extends SpeakeasyBase {
    pathParams: ConnectionsImportPathParams;
    headers: ConnectionsImportHeaders;
    request: shared.ConnectionImportData;
    security: ConnectionsImportSecurity;
}
export declare class ConnectionsImportResponse extends SpeakeasyBase {
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
