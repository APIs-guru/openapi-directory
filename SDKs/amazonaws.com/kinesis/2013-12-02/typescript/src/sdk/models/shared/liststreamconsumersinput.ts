import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListStreamConsumersInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;

  @Metadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp?: Date;
}
