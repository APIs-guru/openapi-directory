import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualityEnum } from "./qualityenum";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";



// AssetPropertyValue
/** 
 * Contains asset property value information.
**/
export class AssetPropertyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: TimeInNanos;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Variant;
}
