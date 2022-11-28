import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationFull } from "./organizationfull";



export class TeamFullTeamSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: string;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum TeamFullPrivacyEnum {
    Closed = "closed",
    Secret = "secret"
}


// TeamFull
/** 
 * Groups of organization members that gives permissions on specified repositories.
**/
export class TeamFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @SpeakeasyMetadata({ data: "json, name=members_count" })
  membersCount: number;

  @SpeakeasyMetadata({ data: "json, name=members_url" })
  membersUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: OrganizationFull;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: TeamFullTeamSimple;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: TeamFullPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=repos_count" })
  reposCount: number;

  @SpeakeasyMetadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
