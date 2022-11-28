import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a list of Download Shares
**/
export declare class UpdateDownloadSharesBulkRequest extends SpeakeasyBase {
    expiration?: ObjectExpiration;
    maxDownloads?: number;
    objectIds: number[];
    resetMaxDownloads?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
}
