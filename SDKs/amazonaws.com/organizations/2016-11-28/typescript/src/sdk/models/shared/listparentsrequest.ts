import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListParentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChildId" })
  childId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
