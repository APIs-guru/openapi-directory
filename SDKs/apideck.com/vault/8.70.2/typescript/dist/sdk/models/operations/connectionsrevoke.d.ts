import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsRevokePathParams extends SpeakeasyBase {
    applicationId: string;
    serviceId: string;
}
export declare class ConnectionsRevokeQueryParams extends SpeakeasyBase {
    redirectUri: string;
    state: string;
}
export declare class ConnectionsRevokeRequest extends SpeakeasyBase {
    pathParams: ConnectionsRevokePathParams;
    queryParams: ConnectionsRevokeQueryParams;
}
export declare class ConnectionsRevokeResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
