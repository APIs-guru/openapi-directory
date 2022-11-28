import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsumersOnePathParams extends SpeakeasyBase {
    consumerId: string;
}
export declare class ConsumersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConsumersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConsumersOneRequest extends SpeakeasyBase {
    pathParams: ConsumersOnePathParams;
    headers: ConsumersOneHeaders;
    security: ConsumersOneSecurity;
}
export declare class ConsumersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getConsumerResponse?: shared.GetConsumerResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
