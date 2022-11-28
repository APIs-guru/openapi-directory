import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernamePathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernamePathParams;
    security: GetTeamsUsernameSecurity;
}
export declare class GetTeamsUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    team?: Map<string, any>;
}
