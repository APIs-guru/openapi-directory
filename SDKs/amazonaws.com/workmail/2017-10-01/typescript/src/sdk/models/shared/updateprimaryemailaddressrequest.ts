import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePrimaryEmailAddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
