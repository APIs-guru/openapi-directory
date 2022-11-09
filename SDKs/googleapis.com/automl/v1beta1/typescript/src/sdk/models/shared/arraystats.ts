import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataStats } from "./datastats";


// ArrayStats
/** 
 * The data statistics of a series of ARRAY values.
**/
export class ArrayStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberStats" })
  memberStats?: DataStats;
}
