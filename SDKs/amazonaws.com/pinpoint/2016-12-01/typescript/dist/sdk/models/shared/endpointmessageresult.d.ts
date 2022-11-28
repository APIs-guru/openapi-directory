import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";
/**
 * Provides information about the delivery status and results of sending a message directly to an endpoint.
**/
export declare class EndpointMessageResult extends SpeakeasyBase {
    address?: string;
    deliveryStatus: DeliveryStatusEnum;
    messageId?: string;
    statusCode: number;
    statusMessage?: string;
    updatedToken?: string;
}
