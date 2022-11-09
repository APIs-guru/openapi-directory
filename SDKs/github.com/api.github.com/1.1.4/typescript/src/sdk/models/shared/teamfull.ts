import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationFull } from "./organizationfull";


export class TeamFullTeamSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @Metadata({ data: "json, name=members_url" })
  membersUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=permission" })
  permission: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: string;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum TeamFullPrivacyEnum {
    Closed = "closed"
,    Secret = "secret"
}


// TeamFull
/** 
 * Groups of organization members that gives permissions on specified repositories.
**/
export class TeamFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=ldap_dn" })
  ldapDn?: string;

  @Metadata({ data: "json, name=members_count" })
  membersCount: number;

  @Metadata({ data: "json, name=members_url" })
  membersUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=organization" })
  organization: OrganizationFull;

  @Metadata({ data: "json, name=parent" })
  parent?: TeamFullTeamSimple;

  @Metadata({ data: "json, name=permission" })
  permission: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: TeamFullPrivacyEnum;

  @Metadata({ data: "json, name=repos_count" })
  reposCount: number;

  @Metadata({ data: "json, name=repositories_url" })
  repositoriesUrl: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
