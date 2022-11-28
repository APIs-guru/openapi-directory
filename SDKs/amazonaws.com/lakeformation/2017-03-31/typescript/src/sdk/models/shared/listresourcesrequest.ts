import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterCondition } from "./filtercondition";



export class ListResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FilterConditionList", elemType: FilterCondition })
  filterConditionList?: FilterCondition[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
