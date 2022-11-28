import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnigramStats } from "./unigramstats";



// StringStats
/** 
 * The data statistics of a series of STRING values.
**/
export class StringStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topUnigramStats", elemType: UnigramStats })
  topUnigramStats?: UnigramStats[];
}
