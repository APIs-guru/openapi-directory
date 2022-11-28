import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";



export class UploadEntityDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecateExistingEntities" })
  deprecateExistingEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: DefinitionDocument;

  @SpeakeasyMetadata({ data: "json, name=syncWithPublicNamespace" })
  syncWithPublicNamespace?: boolean;
}
