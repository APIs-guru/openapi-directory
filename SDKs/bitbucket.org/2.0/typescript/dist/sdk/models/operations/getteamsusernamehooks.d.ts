import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameHooksPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameHooksRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameHooksPathParams;
    security: GetTeamsUsernameHooksSecurity;
}
export declare class GetTeamsUsernameHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
