import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
import { SystemTemplateSummary } from "./systemtemplatesummary";


// SystemTemplateDescription
/** 
 * An object that contains a system's definition document and summary information.
**/
export class SystemTemplateDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @Metadata({ data: "json, name=summary" })
  summary?: SystemTemplateSummary;

  @Metadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
