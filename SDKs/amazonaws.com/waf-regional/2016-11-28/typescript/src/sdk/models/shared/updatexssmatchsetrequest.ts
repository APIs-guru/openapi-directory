import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { XssMatchSetUpdate } from "./xssmatchsetupdate";



// UpdateXssMatchSetRequest
/** 
 * A request to update an <a>XssMatchSet</a>.
**/
export class UpdateXssMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Updates", elemType: XssMatchSetUpdate })
  updates: XssMatchSetUpdate[];

  @SpeakeasyMetadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
