import { SpeakeasyBase } from "../../../internal/utils";
import { UploadSummary } from "./uploadsummary";
/**
 * The type that defines the fields for the task details.
**/
export declare class Task extends SpeakeasyBase {
    completionDate?: string;
    creationDate?: string;
    detailHref?: string;
    feedType?: string;
    schemaVersion?: string;
    status?: string;
    taskId?: string;
    uploadSummary?: UploadSummary;
}
