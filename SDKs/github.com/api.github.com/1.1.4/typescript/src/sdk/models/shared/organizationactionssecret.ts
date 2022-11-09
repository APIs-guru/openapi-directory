import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrganizationActionsSecretVisibilityEnum {
    All = "all"
,    Private = "private"
,    Selected = "selected"
}


// OrganizationActionsSecret
/** 
 * Secrets for GitHub Actions for an organization.
**/
export class OrganizationActionsSecret extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=visibility" })
  visibility: OrganizationActionsSecretVisibilityEnum;
}
