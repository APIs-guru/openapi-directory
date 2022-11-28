import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPathParams;
    request?: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    pullrequest?: Map<string, any>;
}
