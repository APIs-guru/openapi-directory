import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationalUnitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitId" })
  organizationalUnitId: string;
}
