import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchThingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=namespaceVersion" })
  namespaceVersion?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
