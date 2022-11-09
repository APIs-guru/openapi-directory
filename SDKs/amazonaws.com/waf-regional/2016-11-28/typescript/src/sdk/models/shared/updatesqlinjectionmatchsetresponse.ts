import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateSqlInjectionMatchSetResponse
/** 
 * The response to an <a>UpdateSqlInjectionMatchSets</a> request.
**/
export class UpdateSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
