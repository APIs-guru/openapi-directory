import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTrackerConsumersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerArns" })
  consumerArns: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
