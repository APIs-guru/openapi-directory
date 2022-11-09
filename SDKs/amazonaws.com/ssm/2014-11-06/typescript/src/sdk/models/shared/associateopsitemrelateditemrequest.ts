import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationType" })
  associationType: string;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=ResourceUri" })
  resourceUri: string;
}
