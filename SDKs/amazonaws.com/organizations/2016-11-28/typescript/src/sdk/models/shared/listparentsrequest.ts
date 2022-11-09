import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListParentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildId" })
  childId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
