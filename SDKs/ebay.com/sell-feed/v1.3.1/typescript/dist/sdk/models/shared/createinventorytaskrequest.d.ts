import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";
export declare class CreateInventoryTaskRequest extends SpeakeasyBase {
    feedType?: string;
    filterCriteria?: InventoryFilterCriteria;
    inventoryFileTemplate?: string;
    schemaVersion?: string;
}
