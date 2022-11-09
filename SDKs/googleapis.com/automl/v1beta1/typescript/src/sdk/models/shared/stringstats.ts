import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnigramStats } from "./unigramstats";


// StringStats
/** 
 * The data statistics of a series of STRING values.
**/
export class StringStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=topUnigramStats", elemType: shared.UnigramStats })
  topUnigramStats?: UnigramStats[];
}
