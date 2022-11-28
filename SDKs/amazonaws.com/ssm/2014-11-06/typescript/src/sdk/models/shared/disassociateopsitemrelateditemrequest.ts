import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId: string;
}
