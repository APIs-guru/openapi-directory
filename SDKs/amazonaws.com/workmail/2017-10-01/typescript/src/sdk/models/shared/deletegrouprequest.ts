import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
