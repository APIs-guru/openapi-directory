import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
export declare class CreateSystemTemplateRequest extends SpeakeasyBase {
    compatibleNamespaceVersion?: number;
    definition: DefinitionDocument;
}
