import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplacementTemplate } from "./replacementtemplate";


// ReplacementEmailContent
/** 
 * The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.
**/
export class ReplacementEmailContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplacementTemplate" })
  replacementTemplate?: ReplacementTemplate;
}
