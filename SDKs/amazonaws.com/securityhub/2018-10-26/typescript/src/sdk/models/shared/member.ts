import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Member
/** 
 * The details about a member account.
**/
export class Member extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=AdministratorId" })
  administratorId?: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=InvitedAt" })
  invitedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=MasterId" })
  masterId?: string;

  @SpeakeasyMetadata({ data: "json, name=MemberStatus" })
  memberStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
