import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrganizationSimple
/** 
 * Organization Simple
**/
export class OrganizationSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=events_url" })
  eventsUrl: string;

  @Metadata({ data: "json, name=hooks_url" })
  hooksUrl: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=issues_url" })
  issuesUrl: string;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=members_url" })
  membersUrl: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=public_members_url" })
  publicMembersUrl: string;

  @Metadata({ data: "json, name=repos_url" })
  reposUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
