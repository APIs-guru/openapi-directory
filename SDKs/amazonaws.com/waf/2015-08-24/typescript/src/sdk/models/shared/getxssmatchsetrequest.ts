import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetXssMatchSetRequest
/** 
 * A request to get an <a>XssMatchSet</a>.
**/
export class GetXssMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
