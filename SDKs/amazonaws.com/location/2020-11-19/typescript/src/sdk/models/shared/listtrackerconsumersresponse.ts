import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTrackerConsumersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerArns" })
  consumerArns: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
