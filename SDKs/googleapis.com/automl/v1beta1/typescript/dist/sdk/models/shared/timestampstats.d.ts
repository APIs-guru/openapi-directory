import { SpeakeasyBase } from "../../../internal/utils";
import { GranularStats } from "./granularstats";
/**
 * The data statistics of a series of TIMESTAMP values.
**/
export declare class TimestampStats extends SpeakeasyBase {
    granularStats?: Map<string, GranularStats>;
}
