import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationType" })
  associationType: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceUri" })
  resourceUri: string;
}
