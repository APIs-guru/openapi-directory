import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
export declare class CreateFlowTemplateRequest extends SpeakeasyBase {
    compatibleNamespaceVersion?: number;
    definition: DefinitionDocument;
}
