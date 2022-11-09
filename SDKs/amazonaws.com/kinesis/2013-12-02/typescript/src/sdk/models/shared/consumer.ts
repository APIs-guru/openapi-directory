import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";


// Consumer
/** 
 * An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
**/
export class Consumer extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerARN" })
  consumerArn: string;

  @Metadata({ data: "json, name=ConsumerCreationTimestamp" })
  consumerCreationTimestamp: Date;

  @Metadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @Metadata({ data: "json, name=ConsumerStatus" })
  consumerStatus: ConsumerStatusEnum;
}
