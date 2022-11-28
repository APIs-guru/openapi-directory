import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterCriteria } from "./inventoryfiltercriteria";
import { UploadSummary } from "./uploadsummary";
export declare class InventoryTask extends SpeakeasyBase {
    completionDate?: string;
    creationDate?: string;
    detailHref?: string;
    feedType?: string;
    filterCriteria?: InventoryFilterCriteria;
    inventoryFileTemplate?: string;
    schemaVersion?: string;
    status?: string;
    taskId?: string;
    uploadSummary?: UploadSummary;
}
