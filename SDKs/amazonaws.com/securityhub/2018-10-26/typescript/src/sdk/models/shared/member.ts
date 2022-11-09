import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Member
/** 
 * The details about a member account.
**/
export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=AdministratorId" })
  administratorId?: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=InvitedAt" })
  invitedAt?: Date;

  @Metadata({ data: "json, name=MasterId" })
  masterId?: string;

  @Metadata({ data: "json, name=MemberStatus" })
  memberStatus?: string;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
