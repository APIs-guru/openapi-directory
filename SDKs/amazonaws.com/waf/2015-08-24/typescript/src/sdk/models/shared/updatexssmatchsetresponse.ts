import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateXssMatchSetResponse
/** 
 * The response to an <a>UpdateXssMatchSets</a> request.
**/
export class UpdateXssMatchSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
