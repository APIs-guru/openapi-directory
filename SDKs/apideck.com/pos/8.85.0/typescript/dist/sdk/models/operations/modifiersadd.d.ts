import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifiersAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifiersAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifiersAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifiersAddRequest extends SpeakeasyBase {
    queryParams: ModifiersAddQueryParams;
    headers: ModifiersAddHeaders;
    request: shared.ModifierInput;
    security: ModifiersAddSecurity;
}
export declare class ModifiersAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createModifierResponse?: shared.CreateModifierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
