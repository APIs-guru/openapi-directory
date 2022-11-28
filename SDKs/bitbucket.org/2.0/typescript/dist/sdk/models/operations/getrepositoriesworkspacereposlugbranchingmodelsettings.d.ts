import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams;
    security: GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchingModelSettings?: Map<string, any>;
    error?: Map<string, any>;
}
