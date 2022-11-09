import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";


export class CreateFlowTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibleNamespaceVersion" })
  compatibleNamespaceVersion?: number;

  @Metadata({ data: "json, name=definition" })
  definition: DefinitionDocument;
}
