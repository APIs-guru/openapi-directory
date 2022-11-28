import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrganizationActionsSecretVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}


// OrganizationActionsSecret
/** 
 * Secrets for GitHub Actions for an organization.
**/
export class OrganizationActionsSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility: OrganizationActionsSecretVisibilityEnum;
}
