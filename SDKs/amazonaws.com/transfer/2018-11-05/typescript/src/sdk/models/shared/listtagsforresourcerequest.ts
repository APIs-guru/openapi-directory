import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
