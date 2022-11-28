import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSet } from "./xssmatchset";



// CreateXssMatchSetResponse
/** 
 * The response to a <code>CreateXssMatchSet</code> request.
**/
export class CreateXssMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=XssMatchSet" })
  xssMatchSet?: XssMatchSet;
}
