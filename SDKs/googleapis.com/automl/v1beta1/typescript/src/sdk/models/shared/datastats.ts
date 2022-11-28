import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayStats } from "./arraystats";
import { CategoryStats } from "./categorystats";
import { Float64Stats } from "./float64stats";
import { StringStats } from "./stringstats";
import { StructStats } from "./structstats";
import { TimestampStats } from "./timestampstats";



// DataStats
/** 
 * The data statistics of a series of values that share the same DataType.
**/
export class DataStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayStats" })
  arrayStats?: ArrayStats;

  @SpeakeasyMetadata({ data: "json, name=categoryStats" })
  categoryStats?: CategoryStats;

  @SpeakeasyMetadata({ data: "json, name=distinctValueCount" })
  distinctValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=float64Stats" })
  float64Stats?: Float64Stats;

  @SpeakeasyMetadata({ data: "json, name=nullValueCount" })
  nullValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=stringStats" })
  stringStats?: StringStats;

  @SpeakeasyMetadata({ data: "json, name=structStats" })
  structStats?: StructStats;

  @SpeakeasyMetadata({ data: "json, name=timestampStats" })
  timestampStats?: TimestampStats;

  @SpeakeasyMetadata({ data: "json, name=validValueCount" })
  validValueCount?: string;
}
