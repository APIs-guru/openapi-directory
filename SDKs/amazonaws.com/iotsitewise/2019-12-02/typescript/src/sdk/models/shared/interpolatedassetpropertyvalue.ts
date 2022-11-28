import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";



// InterpolatedAssetPropertyValue
/** 
 * Contains information about an interpolated asset property value.
**/
export class InterpolatedAssetPropertyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: TimeInNanos;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Variant;
}
