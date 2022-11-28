import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadataEnumEnum } from "./documentmetadataenumenum";



export class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata: DocumentMetadataEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
