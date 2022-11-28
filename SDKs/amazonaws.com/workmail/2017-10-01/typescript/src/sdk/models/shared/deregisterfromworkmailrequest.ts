import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterFromWorkMailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;
}
