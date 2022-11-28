import { SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
/**
 * A structure containing the name of a column resource and the tags attached to it.
**/
export declare class ColumnLfTag extends SpeakeasyBase {
    lfTags?: LfTagPair[];
    name?: string;
}
