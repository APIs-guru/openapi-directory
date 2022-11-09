import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrganizationModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
