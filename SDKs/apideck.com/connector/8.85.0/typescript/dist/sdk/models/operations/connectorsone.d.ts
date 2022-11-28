import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ConnectorsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConnectorsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectorsOneRequest extends SpeakeasyBase {
    pathParams: ConnectorsOnePathParams;
    headers: ConnectorsOneHeaders;
    security: ConnectorsOneSecurity;
}
export declare class ConnectorsOneResponse extends SpeakeasyBase {
    contentType: string;
    getConnectorResponse?: shared.GetConnectorResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
