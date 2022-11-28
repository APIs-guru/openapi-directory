import { SpeakeasyBase } from "../../../internal/utils";
import { DurationEnum } from "./durationenum";
import { RecencyTypeEnum } from "./recencytypeenum";
/**
 * Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
export declare class RecencyDimension extends SpeakeasyBase {
    duration: DurationEnum;
    recencyType: RecencyTypeEnum;
}
