import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefinitionDocument } from "./definitiondocument";


export class UpdateFlowTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibleNamespaceVersion" })
  compatibleNamespaceVersion?: number;

  @Metadata({ data: "json, name=definition" })
  definition: DefinitionDocument;

  @Metadata({ data: "json, name=id" })
  id: string;
}
