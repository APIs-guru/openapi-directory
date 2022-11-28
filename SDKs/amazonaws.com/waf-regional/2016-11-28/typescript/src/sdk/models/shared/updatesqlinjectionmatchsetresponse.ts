import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateSqlInjectionMatchSetResponse
/** 
 * The response to an <a>UpdateSqlInjectionMatchSets</a> request.
**/
export class UpdateSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
