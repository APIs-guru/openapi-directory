import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifierGroupsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifierGroupsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifierGroupsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifierGroupsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifierGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: ModifierGroupsUpdatePathParams;
    queryParams: ModifierGroupsUpdateQueryParams;
    headers: ModifierGroupsUpdateHeaders;
    request: shared.ModifierGroupInput;
    security: ModifierGroupsUpdateSecurity;
}
export declare class ModifierGroupsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateModifierGroupResponse?: shared.UpdateModifierGroupResponse;
}
