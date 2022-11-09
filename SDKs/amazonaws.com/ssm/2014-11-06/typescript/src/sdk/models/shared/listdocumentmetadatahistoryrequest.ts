import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentMetadataEnumEnum } from "./documentmetadataenumenum";


export class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Metadata" })
  metadata: DocumentMetadataEnumEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
