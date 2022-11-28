import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSetSummary } from "./sqlinjectionmatchsetsummary";



// ListSqlInjectionMatchSetsResponse
/** 
 * The response to a <a>ListSqlInjectionMatchSets</a> request.
**/
export class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSets", elemType: SqlInjectionMatchSetSummary })
  sqlInjectionMatchSets?: SqlInjectionMatchSetSummary[];
}
