import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifierGroupsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ModifierGroupsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ModifierGroupsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ModifierGroupsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ModifierGroupsOneRequest extends SpeakeasyBase {
    pathParams: ModifierGroupsOnePathParams;
    queryParams: ModifierGroupsOneQueryParams;
    headers: ModifierGroupsOneHeaders;
    security: ModifierGroupsOneSecurity;
}
export declare class ModifierGroupsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getModifierGroupResponse?: shared.GetModifierGroupResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
