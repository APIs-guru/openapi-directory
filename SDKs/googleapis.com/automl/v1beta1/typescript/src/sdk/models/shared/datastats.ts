import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=arrayStats" })
  arrayStats?: ArrayStats;

  @Metadata({ data: "json, name=categoryStats" })
  categoryStats?: CategoryStats;

  @Metadata({ data: "json, name=distinctValueCount" })
  distinctValueCount?: string;

  @Metadata({ data: "json, name=float64Stats" })
  float64Stats?: Float64Stats;

  @Metadata({ data: "json, name=nullValueCount" })
  nullValueCount?: string;

  @Metadata({ data: "json, name=stringStats" })
  stringStats?: StringStats;

  @Metadata({ data: "json, name=structStats" })
  structStats?: StructStats;

  @Metadata({ data: "json, name=timestampStats" })
  timestampStats?: TimestampStats;

  @Metadata({ data: "json, name=validValueCount" })
  validValueCount?: string;
}
