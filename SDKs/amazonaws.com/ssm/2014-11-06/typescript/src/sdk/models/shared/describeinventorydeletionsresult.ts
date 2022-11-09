import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryDeletionStatusItem } from "./inventorydeletionstatusitem";


export class DescribeInventoryDeletionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InventoryDeletions", elemType: shared.InventoryDeletionStatusItem })
  inventoryDeletions?: InventoryDeletionStatusItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
