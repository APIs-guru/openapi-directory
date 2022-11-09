import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";
export declare class UploadEntityDefinitionsRequest extends SpeakeasyBase {
    deprecateExistingEntities?: boolean;
    document?: DefinitionDocument;
    syncWithPublicNamespace?: boolean;
}
