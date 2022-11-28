import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerStatusEnum } from "./consumerstatusenum";
/**
 * An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
**/
export declare class Consumer extends SpeakeasyBase {
    consumerArn: string;
    consumerCreationTimestamp: Date;
    consumerName: string;
    consumerStatus: ConsumerStatusEnum;
}
