import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentVersionInfo } from "./documentversioninfo";


export class ListDocumentVersionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentVersions", elemType: shared.DocumentVersionInfo })
  documentVersions?: DocumentVersionInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
