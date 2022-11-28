import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateXssMatchSetResponse
/** 
 * The response to an <a>UpdateXssMatchSets</a> request.
**/
export class UpdateXssMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
