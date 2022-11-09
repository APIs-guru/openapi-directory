import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteSqlInjectionMatchSetResponse
/** 
 * The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
export class DeleteSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
