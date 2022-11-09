import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationalUnitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId: string;
}
