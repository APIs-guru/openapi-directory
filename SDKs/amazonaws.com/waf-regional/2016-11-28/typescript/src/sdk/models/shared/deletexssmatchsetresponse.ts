import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteXssMatchSetResponse
/** 
 * The response to a request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
export class DeleteXssMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
