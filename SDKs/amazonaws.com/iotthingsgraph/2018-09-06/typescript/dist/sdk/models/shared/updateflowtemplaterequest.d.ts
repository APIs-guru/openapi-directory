import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
export declare class UpdateFlowTemplateRequest extends SpeakeasyBase {
    compatibleNamespaceVersion?: number;
    definition: DefinitionDocument;
    id: string;
}
