import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifierGroupsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifierGroupsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifierGroupsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifierGroupsAddRequest extends SpeakeasyBase {
    queryParams: ModifierGroupsAddQueryParams;
    headers: ModifierGroupsAddHeaders;
    request: shared.ModifierGroupInput;
    security: ModifierGroupsAddSecurity;
}
export declare class ModifierGroupsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createModifierGroupResponse?: shared.CreateModifierGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
