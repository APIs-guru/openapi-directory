import { SpeakeasyBase } from "../../../internal/utils";
import { ArrayStats } from "./arraystats";
import { CategoryStats } from "./categorystats";
import { Float64Stats } from "./float64stats";
import { StringStats } from "./stringstats";
import { StructStats } from "./structstats";
import { TimestampStats } from "./timestampstats";
/**
 * The data statistics of a series of values that share the same DataType.
**/
export declare class DataStats extends SpeakeasyBase {
    arrayStats?: ArrayStats;
    categoryStats?: CategoryStats;
    distinctValueCount?: string;
    float64Stats?: Float64Stats;
    nullValueCount?: string;
    stringStats?: StringStats;
    structStats?: StructStats;
    timestampStats?: TimestampStats;
    validValueCount?: string;
}
