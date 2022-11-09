import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItemSchema } from "./inventoryitemschema";


export class GetInventorySchemaResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Schemas", elemType: shared.InventoryItemSchema })
  schemas?: InventoryItemSchema[];
}
