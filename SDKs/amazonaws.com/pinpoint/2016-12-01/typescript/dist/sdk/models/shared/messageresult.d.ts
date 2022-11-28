import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
/**
 * Provides information about the results of sending a message directly to an endpoint address.
**/
export declare class MessageResult extends SpeakeasyBase {
    deliveryStatus: DeliveryStatusEnum;
    messageId?: string;
    statusCode: number;
    statusMessage?: string;
    updatedToken?: string;
}
