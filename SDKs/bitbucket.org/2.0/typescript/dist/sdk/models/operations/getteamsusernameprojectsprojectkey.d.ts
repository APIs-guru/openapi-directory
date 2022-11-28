import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    username: string;
}
export declare class GetTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameProjectsProjectKeyPathParams;
    security: GetTeamsUsernameProjectsProjectKeySecurity;
}
export declare class GetTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    project?: Map<string, any>;
}
