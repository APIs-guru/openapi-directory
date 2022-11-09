import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlInjectionMatchSet } from "./sqlinjectionmatchset";


// GetSqlInjectionMatchSetResponse
/** 
 * The response to a <a>GetSqlInjectionMatchSet</a> request.
**/
export class GetSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SqlInjectionMatchSet" })
  sqlInjectionMatchSet?: SqlInjectionMatchSet;
}
