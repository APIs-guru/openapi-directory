import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";



// EndpointMessageResult
/** 
 * Provides information about the delivery status and results of sending a message directly to an endpoint.
**/
export class EndpointMessageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryStatus" })
  deliveryStatus: DeliveryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MessageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedToken" })
  updatedToken?: string;
}
