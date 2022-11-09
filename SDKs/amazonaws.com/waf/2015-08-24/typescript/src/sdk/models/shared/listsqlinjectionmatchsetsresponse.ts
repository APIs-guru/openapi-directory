import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlInjectionMatchSetSummary } from "./sqlinjectionmatchsetsummary";


// ListSqlInjectionMatchSetsResponse
/** 
 * The response to a <a>ListSqlInjectionMatchSets</a> request.
**/
export class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=SqlInjectionMatchSets", elemType: shared.SqlInjectionMatchSetSummary })
  sqlInjectionMatchSets?: SqlInjectionMatchSetSummary[];
}
