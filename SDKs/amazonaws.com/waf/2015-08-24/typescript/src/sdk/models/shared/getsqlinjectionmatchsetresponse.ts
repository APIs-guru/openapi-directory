import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSet } from "./sqlinjectionmatchset";



// GetSqlInjectionMatchSetResponse
/** 
 * The response to a <a>GetSqlInjectionMatchSet</a> request.
**/
export class GetSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSet" })
  sqlInjectionMatchSet?: SqlInjectionMatchSet;
}
