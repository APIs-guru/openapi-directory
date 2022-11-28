import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateDelegateFromResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
