import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GranularStats } from "./granularstats";



// TimestampStats
/** 
 * The data statistics of a series of TIMESTAMP values.
**/
export class TimestampStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=granularStats", elemType: GranularStats })
  granularStats?: Map<string, GranularStats>;
}
