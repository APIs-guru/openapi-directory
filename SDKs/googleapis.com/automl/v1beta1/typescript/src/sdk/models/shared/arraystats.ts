import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";



// ArrayStats
/** 
 * The data statistics of a series of ARRAY values.
**/
export class ArrayStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberStats" })
  memberStats?: DataStats;
}
