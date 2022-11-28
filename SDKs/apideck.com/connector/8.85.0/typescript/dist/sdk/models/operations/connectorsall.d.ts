import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.ConnectorsFilter;
    limit?: number;
}
export declare class ConnectorsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConnectorsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectorsAllRequest extends SpeakeasyBase {
    queryParams: ConnectorsAllQueryParams;
    headers: ConnectorsAllHeaders;
    security: ConnectorsAllSecurity;
}
export declare class ConnectorsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getConnectorsResponse?: shared.GetConnectorsResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
