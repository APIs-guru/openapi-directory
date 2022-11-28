import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}
