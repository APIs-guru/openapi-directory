import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifierGroupsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifierGroupsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifierGroupsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifierGroupsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifierGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: ModifierGroupsDeletePathParams;
    queryParams: ModifierGroupsDeleteQueryParams;
    headers: ModifierGroupsDeleteHeaders;
    security: ModifierGroupsDeleteSecurity;
}
export declare class ModifierGroupsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteModifierGroupResponse?: shared.DeleteModifierGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
