import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteXssMatchSetRequest
/** 
 * A request to delete an <a>XssMatchSet</a> from AWS WAF.
**/
export class DeleteXssMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
