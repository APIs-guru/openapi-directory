import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualityEnum } from "./qualityenum";
import { TimeInNanos } from "./timeinnanos";
import { Variant } from "./variant";


// AssetPropertyValue
/** 
 * Contains asset property value information.
**/
export class AssetPropertyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality?: QualityEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: TimeInNanos;

  @Metadata({ data: "json, name=value" })
  value: Variant;
}
