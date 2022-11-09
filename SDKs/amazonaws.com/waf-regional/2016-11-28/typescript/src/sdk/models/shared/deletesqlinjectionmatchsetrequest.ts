import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteSqlInjectionMatchSetRequest
/** 
 * A request to delete a <a>SqlInjectionMatchSet</a> from AWS WAF.
**/
export class DeleteSqlInjectionMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=SqlInjectionMatchSetId" })
  sqlInjectionMatchSetId: string;
}
