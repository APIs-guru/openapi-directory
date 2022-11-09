import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";


// ConsumerDescription
/** 
 * An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
**/
export class ConsumerDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumerARN" })
  consumerArn: string;

  @Metadata({ data: "json, name=ConsumerCreationTimestamp" })
  consumerCreationTimestamp: Date;

  @Metadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @Metadata({ data: "json, name=ConsumerStatus" })
  consumerStatus: ConsumerStatusEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn: string;
}
