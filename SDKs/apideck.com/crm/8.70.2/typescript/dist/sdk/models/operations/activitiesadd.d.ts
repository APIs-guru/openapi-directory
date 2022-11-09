import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ActivitiesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ActivitiesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ActivitiesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ActivitiesAddRequest extends SpeakeasyBase {
    queryParams: ActivitiesAddQueryParams;
    headers: ActivitiesAddHeaders;
    request: shared.Activity;
    security: ActivitiesAddSecurity;
}
export declare class ActivitiesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createActivityResponse?: shared.CreateActivityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
