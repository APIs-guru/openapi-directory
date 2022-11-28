import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    username: string;
}
export declare class DeleteTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: DeleteTeamsUsernameProjectsProjectKeyPathParams;
    security: DeleteTeamsUsernameProjectsProjectKeySecurity;
}
export declare class DeleteTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
