import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GranularStats } from "./granularstats";


// TimestampStats
/** 
 * The data statistics of a series of TIMESTAMP values.
**/
export class TimestampStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=granularStats", elemType: shared.GranularStats })
  granularStats?: Map<string, GranularStats>;
}
