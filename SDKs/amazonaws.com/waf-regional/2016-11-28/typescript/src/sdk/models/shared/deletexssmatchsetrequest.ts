import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteXssMatchSetRequest
/** 
 * A request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
export class DeleteXssMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
