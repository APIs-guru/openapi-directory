import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
