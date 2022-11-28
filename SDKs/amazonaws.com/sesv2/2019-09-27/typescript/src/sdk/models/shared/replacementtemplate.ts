import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplacementTemplate
/** 
 * An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
**/
export class ReplacementTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplacementTemplateData" })
  replacementTemplateData?: string;
}
