import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateXssMatchSetRequest
/** 
 * A request to create an <a>XssMatchSet</a>.
**/
export class CreateXssMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
