import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItemSchema } from "./inventoryitemschema";



export class GetInventorySchemaResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Schemas", elemType: InventoryItemSchema })
  schemas?: InventoryItemSchema[];
}
