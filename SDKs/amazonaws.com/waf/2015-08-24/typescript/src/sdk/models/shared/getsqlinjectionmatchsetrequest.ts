import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSqlInjectionMatchSetRequest
/** 
 * A request to get a <a>SqlInjectionMatchSet</a>.
**/
export class GetSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;
}
