import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteXssMatchSetResponse
/** 
 * The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
export class DeleteXssMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
