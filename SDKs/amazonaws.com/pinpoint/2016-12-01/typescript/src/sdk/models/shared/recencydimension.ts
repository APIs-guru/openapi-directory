import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DurationEnum } from "./durationenum";
import { RecencyTypeEnum } from "./recencytypeenum";



// RecencyDimension
/** 
 * Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
export class RecencyDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration: DurationEnum;

  @SpeakeasyMetadata({ data: "json, name=RecencyType" })
  recencyType: RecencyTypeEnum;
}
