import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersWorkspaceRepositoriesPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetUsersWorkspaceRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUsersWorkspaceRepositoriesRequest extends SpeakeasyBase {
    pathParams: GetUsersWorkspaceRepositoriesPathParams;
    security: GetUsersWorkspaceRepositoriesSecurity;
}
export declare class GetUsersWorkspaceRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
