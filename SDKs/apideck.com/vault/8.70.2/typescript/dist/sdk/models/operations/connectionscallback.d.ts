import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConnectionsCallbackQueryParams extends SpeakeasyBase {
    code: string;
    state: string;
}
export declare class ConnectionsCallbackRequest extends SpeakeasyBase {
    queryParams: ConnectionsCallbackQueryParams;
}
export declare class ConnectionsCallbackResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
