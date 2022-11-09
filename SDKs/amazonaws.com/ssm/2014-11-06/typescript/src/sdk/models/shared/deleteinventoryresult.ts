import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";


export class DeleteInventoryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @Metadata({ data: "json, name=DeletionSummary" })
  deletionSummary?: InventoryDeletionSummary;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;
}
