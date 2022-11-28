import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorDocsOnePathParams extends SpeakeasyBase {
    docId: string;
    id: string;
}
export declare class ConnectorDocsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConnectorDocsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConnectorDocsOneRequest extends SpeakeasyBase {
    pathParams: ConnectorDocsOnePathParams;
    headers: ConnectorDocsOneHeaders;
    security: ConnectorDocsOneSecurity;
}
export declare class ConnectorDocsOneResponse extends SpeakeasyBase {
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    connectorDocsOne200TextMarkdownMarkdownString?: string;
}
