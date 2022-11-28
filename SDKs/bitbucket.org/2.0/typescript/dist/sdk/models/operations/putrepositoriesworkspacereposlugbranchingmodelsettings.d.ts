import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams;
    security: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchingModelSettings?: Map<string, any>;
    error?: Map<string, any>;
}
