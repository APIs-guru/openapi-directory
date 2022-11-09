import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
