import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating a list of Download Shares
**/
export declare class UpdateUploadSharesBulkRequest extends SpeakeasyBase {
    expiration?: ObjectExpiration;
    filesExpiryPeriod?: number;
    maxSize?: number;
    maxSlots?: number;
    objectIds: number[];
    resetFilesExpiryPeriod?: boolean;
    resetMaxSize?: boolean;
    resetMaxSlots?: boolean;
    showCreatorName?: boolean;
    showCreatorUsername?: boolean;
    showUploadedFiles?: boolean;
}
