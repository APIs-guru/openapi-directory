import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QualityEnum } from "./qualityenum";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";
/**
 * Contains asset property value information.
**/
export declare class AssetPropertyValue extends SpeakeasyBase {
    quality?: QualityEnum;
    timestamp: TimeInNanos;
    value: Variant;
}
