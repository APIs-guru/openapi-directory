import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";


export class UploadEntityDefinitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecateExistingEntities" })
  deprecateExistingEntities?: boolean;

  @Metadata({ data: "json, name=document" })
  document?: DefinitionDocument;

  @Metadata({ data: "json, name=syncWithPublicNamespace" })
  syncWithPublicNamespace?: boolean;
}
