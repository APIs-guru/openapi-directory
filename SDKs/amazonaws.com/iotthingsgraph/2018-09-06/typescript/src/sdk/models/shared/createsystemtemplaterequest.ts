import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";



export class CreateSystemTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibleNamespaceVersion" })
  compatibleNamespaceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: DefinitionDocument;
}
