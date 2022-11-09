import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { XssMatchSet } from "./xssmatchset";


// CreateXssMatchSetResponse
/** 
 * The response to a <code>CreateXssMatchSet</code> request.
**/
export class CreateXssMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=XssMatchSet" })
  xssMatchSet?: XssMatchSet;
}
