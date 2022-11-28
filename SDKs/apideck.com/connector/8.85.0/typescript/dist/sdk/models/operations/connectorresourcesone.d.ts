import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorResourcesOnePathParams extends SpeakeasyBase {
    id: string;
    resourceId: string;
}
export declare class ConnectorResourcesOneQueryParams extends SpeakeasyBase {
    unifiedApi?: shared.UnifiedApiIdEnum;
}
export declare class ConnectorResourcesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConnectorResourcesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectorResourcesOneRequest extends SpeakeasyBase {
    pathParams: ConnectorResourcesOnePathParams;
    queryParams: ConnectorResourcesOneQueryParams;
    headers: ConnectorResourcesOneHeaders;
    security: ConnectorResourcesOneSecurity;
}
export declare class ConnectorResourcesOneResponse extends SpeakeasyBase {
    contentType: string;
    getConnectorResourceResponse?: shared.GetConnectorResourceResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
