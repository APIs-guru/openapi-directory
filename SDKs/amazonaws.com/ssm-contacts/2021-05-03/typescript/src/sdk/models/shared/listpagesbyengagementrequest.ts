import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPagesByEngagementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngagementId" })
  engagementId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
