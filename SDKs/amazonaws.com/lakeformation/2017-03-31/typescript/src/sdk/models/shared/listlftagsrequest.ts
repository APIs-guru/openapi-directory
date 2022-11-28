import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";



export class ListLfTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceShareType" })
  resourceShareType?: ResourceShareTypeEnum;
}
