import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplacementTemplate
/** 
 * An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
**/
export class ReplacementTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplacementTemplateData" })
  replacementTemplateData?: string;
}
