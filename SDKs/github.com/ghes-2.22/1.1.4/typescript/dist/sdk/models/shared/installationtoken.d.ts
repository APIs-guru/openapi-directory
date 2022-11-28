import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
export declare class InstallationTokenPermissions extends SpeakeasyBase {
    contents?: string;
    issues?: string;
    metadata?: string;
    singleFile?: string;
}
export declare enum InstallationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Authentication token for a GitHub App installed on a user or org.
**/
export declare class InstallationToken extends SpeakeasyBase {
    expiresAt: string;
    hasMultipleSingleFiles?: boolean;
    permissions?: InstallationTokenPermissions;
    repositories?: Repository[];
    repositorySelection?: InstallationTokenRepositorySelectionEnum;
    singleFile?: string;
    singleFilePaths?: string[];
    token: string;
}
