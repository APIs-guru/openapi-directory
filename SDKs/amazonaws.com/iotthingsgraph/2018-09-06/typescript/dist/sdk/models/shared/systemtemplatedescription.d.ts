import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { SystemTemplateSummary } from "./systemtemplatesummary";
/**
 * An object that contains a system's definition document and summary information.
**/
export declare class SystemTemplateDescription extends SpeakeasyBase {
    definition?: DefinitionDocument;
    summary?: SystemTemplateSummary;
    validatedNamespaceVersion?: number;
}
