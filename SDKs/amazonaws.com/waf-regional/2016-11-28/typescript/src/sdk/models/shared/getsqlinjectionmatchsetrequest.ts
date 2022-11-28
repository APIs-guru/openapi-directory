import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSqlInjectionMatchSetRequest
/** 
 * A request to get a <a>SqlInjectionMatchSet</a>.
**/
export class GetSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;
}
