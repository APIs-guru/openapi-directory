import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId: string;
}
