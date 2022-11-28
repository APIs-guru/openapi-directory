import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameProjectsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameProjectsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameProjectsRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameProjectsPathParams;
    security: GetTeamsUsernameProjectsSecurity;
}
export declare class GetTeamsUsernameProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedProjects?: shared.PaginatedProjects;
}
