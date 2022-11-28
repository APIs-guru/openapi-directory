import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";



// Consumer
/** 
 * An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
**/
export class Consumer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerARN" })
  consumerArn: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumerCreationTimestamp" })
  consumerCreationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumerStatus" })
  consumerStatus: ConsumerStatusEnum;
}
