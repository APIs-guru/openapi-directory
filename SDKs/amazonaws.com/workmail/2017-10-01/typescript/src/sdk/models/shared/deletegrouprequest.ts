import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
