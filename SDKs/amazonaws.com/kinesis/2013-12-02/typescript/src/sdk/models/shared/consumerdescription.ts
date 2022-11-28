import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";



// ConsumerDescription
/** 
 * An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
**/
export class ConsumerDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumerARN" })
  consumerArn: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumerCreationTimestamp" })
  consumerCreationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=ConsumerName" })
  consumerName: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumerStatus" })
  consumerStatus: ConsumerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn: string;
}
