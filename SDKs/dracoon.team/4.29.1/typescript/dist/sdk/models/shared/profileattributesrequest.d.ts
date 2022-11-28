import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
/**
 * Request model for setting user profile attributes
**/
export declare class ProfileAttributesRequest extends SpeakeasyBase {
    items: KeyValueEntry[];
}
