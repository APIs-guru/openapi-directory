import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectExpiration } from "./objectexpiration";
/**
 * Request model for updating group's metadata
**/
export declare class UpdateGroupRequest extends SpeakeasyBase {
    expiration?: ObjectExpiration;
    name?: string;
}
