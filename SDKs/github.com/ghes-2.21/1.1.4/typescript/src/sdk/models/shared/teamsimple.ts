import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamSimple
/** 
 * Groups of organization members that gives permissions on specified repositories.
**/
export class TeamSimple extends SpeakeasyBase {
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
