import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { XssMatchSet } from "./xssmatchset";


// GetXssMatchSetResponse
/** 
 * The response to a <a>GetXssMatchSet</a> request.
**/
export class GetXssMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=XssMatchSet" })
  xssMatchSet?: XssMatchSet;
}
