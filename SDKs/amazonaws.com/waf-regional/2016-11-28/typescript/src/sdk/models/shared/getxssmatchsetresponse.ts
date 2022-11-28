import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSet } from "./xssmatchset";



// GetXssMatchSetResponse
/** 
 * The response to a <a>GetXssMatchSet</a> request.
**/
export class GetXssMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=XssMatchSet" })
  xssMatchSet?: XssMatchSet;
}
