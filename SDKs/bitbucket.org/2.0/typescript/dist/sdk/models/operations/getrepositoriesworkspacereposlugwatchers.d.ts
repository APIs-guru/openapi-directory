import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugWatchersPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugWatchersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugWatchersRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugWatchersPathParams;
    security: GetRepositoriesWorkspaceRepoSlugWatchersSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugWatchersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
