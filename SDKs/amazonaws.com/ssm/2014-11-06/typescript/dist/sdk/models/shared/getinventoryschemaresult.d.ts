import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItemSchema } from "./inventoryitemschema";
export declare class GetInventorySchemaResult extends SpeakeasyBase {
    nextToken?: string;
    schemas?: InventoryItemSchema[];
}
