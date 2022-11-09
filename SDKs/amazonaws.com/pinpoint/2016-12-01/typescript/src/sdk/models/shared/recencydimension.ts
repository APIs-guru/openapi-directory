import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DurationEnum } from "./durationenum";
import { RecencyTypeEnum } from "./recencytypeenum";


// RecencyDimension
/** 
 * Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
**/
export class RecencyDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration: DurationEnum;

  @Metadata({ data: "json, name=RecencyType" })
  recencyType: RecencyTypeEnum;
}
