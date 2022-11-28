import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernameFollowingPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernameFollowingSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernameFollowingRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernameFollowingPathParams;
    security: GetTeamsUsernameFollowingSecurity;
}
export declare class GetTeamsUsernameFollowingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
