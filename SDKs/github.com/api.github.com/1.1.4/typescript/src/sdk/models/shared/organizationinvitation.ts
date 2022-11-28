import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";



// OrganizationInvitation
/** 
 * Organization Invitation
**/
export class OrganizationInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=failed_at" })
  failedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=failed_reason" })
  failedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=invitation_team_url" })
  invitationTeamUrl: string;

  @SpeakeasyMetadata({ data: "json, name=invitation_teams_url" })
  invitationTeamsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=inviter" })
  inviter: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;

  @SpeakeasyMetadata({ data: "json, name=team_count" })
  teamCount: number;
}
