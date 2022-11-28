import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterStreamConsumerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerARN" })
  consumerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumerName" })
  consumerName?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;
}
