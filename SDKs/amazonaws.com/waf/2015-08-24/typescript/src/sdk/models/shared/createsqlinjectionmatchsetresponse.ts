import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SqlInjectionMatchSet } from "./sqlinjectionmatchset";


// CreateSqlInjectionMatchSetResponse
/** 
 * The response to a <code>CreateSqlInjectionMatchSet</code> request.
**/
export class CreateSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=SqlInjectionMatchSet" })
  sqlInjectionMatchSet?: SqlInjectionMatchSet;
}
