import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    username: string;
}
export declare class PutTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutTeamsUsernameHooksUidRequest extends SpeakeasyBase {
    pathParams: PutTeamsUsernameHooksUidPathParams;
    security: PutTeamsUsernameHooksUidSecurity;
}
export declare class PutTeamsUsernameHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
