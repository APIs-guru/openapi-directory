import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating files
**/
export declare class UpdateFilesBulkRequest extends SpeakeasyBase {
    classification?: number;
    expiration?: ObjectExpiration;
    objectIds: number[];
}
