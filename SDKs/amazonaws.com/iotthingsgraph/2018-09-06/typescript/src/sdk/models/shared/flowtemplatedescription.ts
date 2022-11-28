import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { FlowTemplateSummary } from "./flowtemplatesummary";



// FlowTemplateDescription
/** 
 * An object that contains a workflow's definition and summary information.
**/
export class FlowTemplateDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: DefinitionDocument;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: FlowTemplateSummary;

  @SpeakeasyMetadata({ data: "json, name=validatedNamespaceVersion" })
  validatedNamespaceVersion?: number;
}
