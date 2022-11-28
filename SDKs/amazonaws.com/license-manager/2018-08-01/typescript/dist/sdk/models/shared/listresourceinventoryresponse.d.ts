import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceInventory } from "./resourceinventory";
export declare class ListResourceInventoryResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceInventoryList?: ResourceInventory[];
}
