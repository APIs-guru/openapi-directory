import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSubscriptionScopesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    notificationScopeList?: shared.NotificationScopeList;
    statusCode: number;
}
