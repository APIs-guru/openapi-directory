import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsUsernameProjectsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PostTeamsUsernameProjectsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostTeamsUsernameProjectsRequest extends SpeakeasyBase {
    pathParams: PostTeamsUsernameProjectsPathParams;
    request: Map<string, any>;
    security: PostTeamsUsernameProjectsSecurity;
}
export declare class PostTeamsUsernameProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    project?: Map<string, any>;
}
