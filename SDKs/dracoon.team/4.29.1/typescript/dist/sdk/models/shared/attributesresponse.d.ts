import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
import { Range } from "./range";
/**
 * Ranged list of attributes
**/
export declare class AttributesResponse extends SpeakeasyBase {
    items: KeyValueEntry[];
    range: Range;
}
