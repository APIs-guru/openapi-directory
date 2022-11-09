import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateXssMatchSetRequest
/** 
 * A request to create an <a>XssMatchSet</a>.
**/
export class CreateXssMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
