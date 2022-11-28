import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifiersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class ModifiersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifiersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifiersAllRequest extends SpeakeasyBase {
    queryParams: ModifiersAllQueryParams;
    headers: ModifiersAllHeaders;
    security: ModifiersAllSecurity;
}
export declare class ModifiersAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getModifiersResponse?: shared.GetModifiersResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
