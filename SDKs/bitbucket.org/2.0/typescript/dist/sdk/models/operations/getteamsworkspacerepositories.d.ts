import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsWorkspaceRepositoriesPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetTeamsWorkspaceRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsWorkspaceRepositoriesRequest extends SpeakeasyBase {
    pathParams: GetTeamsWorkspaceRepositoriesPathParams;
    security: GetTeamsWorkspaceRepositoriesSecurity;
}
export declare class GetTeamsWorkspaceRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
