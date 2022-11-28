import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    username: string;
}
export declare class GetTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameHooksUidRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameHooksUidPathParams;
    security: GetTeamsUsernameHooksUidSecurity;
}
export declare class GetTeamsUsernameHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
