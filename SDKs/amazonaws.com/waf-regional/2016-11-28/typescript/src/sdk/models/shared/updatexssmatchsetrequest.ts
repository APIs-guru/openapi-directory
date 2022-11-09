import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { XssMatchSetUpdate } from "./xssmatchsetupdate";


// UpdateXssMatchSetRequest
/** 
 * A request to update an <a>XssMatchSet</a>.
**/
export class UpdateXssMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.XssMatchSetUpdate })
  updates: XssMatchSetUpdate[];

  @Metadata({ data: "json, name=XssMatchSetId" })
  xssMatchSetId: string;
}
