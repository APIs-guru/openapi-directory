import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { FlowTemplateSummary } from "./flowtemplatesummary";
/**
 * An object that contains a workflow's definition and summary information.
**/
export declare class FlowTemplateDescription extends SpeakeasyBase {
    definition?: DefinitionDocument;
    summary?: FlowTemplateSummary;
    validatedNamespaceVersion?: number;
}
