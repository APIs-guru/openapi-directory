import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
import { Range } from "./range";
/**
 * User profile attributes
**/
export declare class ProfileAttributes extends SpeakeasyBase {
    items: KeyValueEntry[];
    range: Range;
}
