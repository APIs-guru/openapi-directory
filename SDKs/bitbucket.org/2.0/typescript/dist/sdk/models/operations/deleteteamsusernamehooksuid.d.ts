import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    username: string;
}
export declare class DeleteTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteTeamsUsernameHooksUidRequest extends SpeakeasyBase {
    pathParams: DeleteTeamsUsernameHooksUidPathParams;
    security: DeleteTeamsUsernameHooksUidSecurity;
}
export declare class DeleteTeamsUsernameHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
