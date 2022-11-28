import { SpeakeasyBase } from "../../../internal/utils";
import { OrderFilterCriteria } from "./orderfiltercriteria";
import { UploadSummary } from "./uploadsummary";
/**
 * The type that defines the fields for the getOrderTask response.
**/
export declare class OrderTask extends SpeakeasyBase {
    completionDate?: string;
    creationDate?: string;
    detailHref?: string;
    feedType?: string;
    filterCriteria?: OrderFilterCriteria;
    schemaVersion?: string;
    status?: string;
    taskId?: string;
    uploadSummary?: UploadSummary;
}
