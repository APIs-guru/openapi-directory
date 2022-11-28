import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterStreamConsumerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn: string;
}
