import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateMemberFromGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId: string;

  @Metadata({ data: "json, name=MemberId" })
  memberId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
