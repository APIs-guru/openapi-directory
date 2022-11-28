import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameFollowersPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameFollowersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameFollowersRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameFollowersPathParams;
    security: GetTeamsUsernameFollowersSecurity;
}
export declare class GetTeamsUsernameFollowersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
