import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSubscribedWorkteamsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
