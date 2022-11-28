import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSqlInjectionMatchSetRequest
/** 
 * A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
export class DeleteSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;
}
