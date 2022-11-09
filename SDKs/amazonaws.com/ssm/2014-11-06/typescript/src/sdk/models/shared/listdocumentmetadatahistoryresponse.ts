import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentMetadataResponseInfo } from "./documentmetadataresponseinfo";


export class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Metadata" })
  metadata?: DocumentMetadataResponseInfo;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
