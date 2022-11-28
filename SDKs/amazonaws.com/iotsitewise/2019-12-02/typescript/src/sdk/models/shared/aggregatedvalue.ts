import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualityEnum } from "./qualityenum";
import { Aggregates } from "./aggregates";



// AggregatedValue
/** 
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
**/
export class AggregatedValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Aggregates;
}
