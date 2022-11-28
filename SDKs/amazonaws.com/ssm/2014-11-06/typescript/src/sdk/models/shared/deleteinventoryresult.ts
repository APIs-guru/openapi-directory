import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";



export class DeleteInventoryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletionSummary" })
  deletionSummary?: InventoryDeletionSummary;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;
}
