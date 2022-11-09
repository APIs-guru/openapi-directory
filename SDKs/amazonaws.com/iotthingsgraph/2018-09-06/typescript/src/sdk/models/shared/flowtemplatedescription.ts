import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
import { FlowTemplateSummary } from "./flowtemplatesummary";


// FlowTemplateDescription
/** 
 * An object that contains a workflow's definition and summary information.
**/
export class FlowTemplateDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @Metadata({ data: "json, name=summary" })
  summary?: FlowTemplateSummary;

  @Metadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
