import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Invitation
/** 
 * Details about an invitation.
**/
export class Invitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvitationId" })
  invitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=InvitedAt" })
  invitedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=MemberStatus" })
  memberStatus?: string;
}
