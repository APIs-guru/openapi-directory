import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugMilestonesPathParams;
    security: GetRepositoriesWorkspaceRepoSlugMilestonesSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedMilestones?: shared.PaginatedMilestones;
}
