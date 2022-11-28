import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetXssMatchSetRequest
/** 
 * A request to get an <a>XssMatchSet</a>.
**/
export class GetXssMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
