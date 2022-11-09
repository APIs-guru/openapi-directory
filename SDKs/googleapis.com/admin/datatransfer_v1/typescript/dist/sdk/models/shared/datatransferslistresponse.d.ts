import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataTransfer } from "./datatransfer";
/**
 * Template for a collection of DataTransfer resources.
**/
export declare class DataTransfersListResponse extends SpeakeasyBase {
    dataTransfers?: DataTransfer[];
    etag?: string;
    kind?: string;
    nextPageToken?: string;
}
