import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { SystemTemplateSummary } from "./systemtemplatesummary";



// SystemTemplateDescription
/** 
 * An object that contains a system's definition document and summary information.
**/
export class SystemTemplateDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;

  @SpeakeasyMetadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
