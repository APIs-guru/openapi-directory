import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrganizationActionsSecretVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
/**
 * Secrets for GitHub Actions for an organization.
**/
export declare class OrganizationActionsSecret extends SpeakeasyBase {
    createdAt: Date;
    name: string;
    selectedRepositoriesUrl?: string;
    updatedAt: Date;
    visibility: OrganizationActionsSecretVisibilityEnum;
}
