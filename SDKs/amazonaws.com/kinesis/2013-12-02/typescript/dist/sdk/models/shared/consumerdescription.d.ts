import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";
/**
 * An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
**/
export declare class ConsumerDescription extends SpeakeasyBase {
    consumerArn: string;
    consumerCreationTimestamp: Date;
    consumerName: string;
    consumerStatus: ConsumerStatusEnum;
    streamArn: string;
}
