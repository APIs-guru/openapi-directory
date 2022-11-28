import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the real-time status of a Snow device's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.
**/
export declare class DataTransfer extends SpeakeasyBase {
    bytesTransferred?: number;
    objectsTransferred?: number;
    totalBytes?: number;
    totalObjects?: number;
}
