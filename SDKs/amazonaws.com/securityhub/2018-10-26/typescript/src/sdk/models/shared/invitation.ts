import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Invitation
/** 
 * Details about an invitation.
**/
export class Invitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=InvitationId" })
  invitationId?: string;

  @Metadata({ data: "json, name=InvitedAt" })
  invitedAt?: Date;

  @Metadata({ data: "json, name=MemberStatus" })
  memberStatus?: string;
}
