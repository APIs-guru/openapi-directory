import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsumersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class ConsumersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConsumersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConsumersAllRequest extends SpeakeasyBase {
    queryParams: ConsumersAllQueryParams;
    headers: ConsumersAllHeaders;
    security: ConsumersAllSecurity;
}
export declare class ConsumersAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getConsumersResponse?: shared.GetConsumersResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
