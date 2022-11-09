import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualityEnum } from "./qualityenum";
import { Aggregates } from "./aggregates";


// AggregatedValue
/** 
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
**/
export class AggregatedValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality?: QualityEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=value" })
  value: Aggregates;
}
