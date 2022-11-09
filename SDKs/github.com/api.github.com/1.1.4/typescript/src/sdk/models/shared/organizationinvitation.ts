import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";


// OrganizationInvitation
/** 
 * Organization Invitation
**/
export class OrganizationInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=failed_at" })
  failedAt?: string;

  @Metadata({ data: "json, name=failed_reason" })
  failedReason?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=invitation_team_url" })
  invitationTeamUrl: string;

  @Metadata({ data: "json, name=invitation_teams_url" })
  invitationTeamsUrl?: string;

  @Metadata({ data: "json, name=inviter" })
  inviter: SimpleUser;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=team_count" })
  teamCount: number;
}
