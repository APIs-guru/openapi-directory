import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlInjectionMatchSet } from "./sqlinjectionmatchset";



// CreateSqlInjectionMatchSetResponse
/** 
 * The response to a <code>CreateSqlInjectionMatchSet</code> request.
**/
export class CreateSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSet" })
  sqlInjectionMatchSet?: SqlInjectionMatchSet;
}
