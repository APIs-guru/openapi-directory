import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionStatusItem } from "./inventorydeletionstatusitem";



export class DescribeInventoryDeletionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InventoryDeletions", elemType: InventoryDeletionStatusItem })
  inventoryDeletions?: InventoryDeletionStatusItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
