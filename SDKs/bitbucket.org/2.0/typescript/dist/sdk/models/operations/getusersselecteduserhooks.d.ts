import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersSelectedUserHooksPathParams extends SpeakeasyBase {
    selectedUser: string;
}
export declare class GetUsersSelectedUserHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersSelectedUserHooksRequest extends SpeakeasyBase {
    pathParams: GetUsersSelectedUserHooksPathParams;
    security: GetUsersSelectedUserHooksSecurity;
}
export declare class GetUsersSelectedUserHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
