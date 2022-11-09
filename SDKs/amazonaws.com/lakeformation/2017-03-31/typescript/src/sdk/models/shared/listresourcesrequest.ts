import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterCondition } from "./filtercondition";


export class ListResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FilterConditionList", elemType: shared.FilterCondition })
  filterConditionList?: FilterCondition[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
