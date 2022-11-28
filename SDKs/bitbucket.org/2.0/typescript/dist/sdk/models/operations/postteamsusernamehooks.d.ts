import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsUsernameHooksPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PostTeamsUsernameHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostTeamsUsernameHooksRequest extends SpeakeasyBase {
    pathParams: PostTeamsUsernameHooksPathParams;
    security: PostTeamsUsernameHooksSecurity;
}
export declare class PostTeamsUsernameHooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
