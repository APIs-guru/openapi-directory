import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams extends SpeakeasyBase {
    milestoneId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    milestone?: Map<string, any>;
}
