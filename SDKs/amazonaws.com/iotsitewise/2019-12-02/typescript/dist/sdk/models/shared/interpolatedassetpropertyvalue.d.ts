import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";
/**
 * Contains information about an interpolated asset property value.
**/
export declare class InterpolatedAssetPropertyValue extends SpeakeasyBase {
    timestamp: TimeInNanos;
    value: Variant;
}
