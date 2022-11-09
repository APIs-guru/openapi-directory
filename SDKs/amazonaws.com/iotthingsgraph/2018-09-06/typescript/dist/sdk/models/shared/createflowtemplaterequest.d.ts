import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
export declare class CreateFlowTemplateRequest extends SpeakeasyBase {
    compatibleNamespaceVersion?: number;
    definition: DefinitionDocument;
}
