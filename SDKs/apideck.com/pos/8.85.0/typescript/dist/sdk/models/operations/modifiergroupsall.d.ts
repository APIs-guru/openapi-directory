import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifierGroupsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class ModifierGroupsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifierGroupsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifierGroupsAllRequest extends SpeakeasyBase {
    queryParams: ModifierGroupsAllQueryParams;
    headers: ModifierGroupsAllHeaders;
    security: ModifierGroupsAllSecurity;
}
export declare class ModifierGroupsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getModifierGroupsResponse?: shared.GetModifierGroupsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
