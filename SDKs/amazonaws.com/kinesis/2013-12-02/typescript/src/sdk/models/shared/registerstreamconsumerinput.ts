import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterStreamConsumerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;
}
