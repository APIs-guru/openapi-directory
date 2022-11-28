import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
