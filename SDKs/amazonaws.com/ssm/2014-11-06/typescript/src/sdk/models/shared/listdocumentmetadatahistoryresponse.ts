import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadataResponseInfo } from "./documentmetadataresponseinfo";



export class ListDocumentMetadataHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: DocumentMetadataResponseInfo;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
