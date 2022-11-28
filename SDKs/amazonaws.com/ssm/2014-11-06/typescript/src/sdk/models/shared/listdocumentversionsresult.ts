import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentVersionInfo } from "./documentversioninfo";



export class ListDocumentVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersions", elemType: DocumentVersionInfo })
  documentVersions?: DocumentVersionInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
