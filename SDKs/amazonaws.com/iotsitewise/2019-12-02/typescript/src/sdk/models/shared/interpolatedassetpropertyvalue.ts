import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";


// InterpolatedAssetPropertyValue
/** 
 * Contains information about an interpolated asset property value.
**/
export class InterpolatedAssetPropertyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=timestamp" })
  timestamp: TimeInNanos;

  @Metadata({ data: "json, name=value" })
  value: Variant;
}
