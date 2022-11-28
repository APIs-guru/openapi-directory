import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSqlInjectionMatchSetResponse
/** 
 * The response to a request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
export class DeleteSqlInjectionMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
