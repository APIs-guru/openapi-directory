import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
