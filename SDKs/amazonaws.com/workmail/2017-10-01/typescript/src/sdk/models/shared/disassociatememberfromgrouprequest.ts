import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateMemberFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=MemberId" })
  memberId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
