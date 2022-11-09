import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";


// EndpointMessageResult
/** 
 * Provides information about the delivery status and results of sending a message directly to an endpoint.
**/
export class EndpointMessageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=DeliveryStatus" })
  deliveryStatus: DeliveryStatusEnum;

  @Metadata({ data: "json, name=MessageId" })
  messageId?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode: number;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=UpdatedToken" })
  updatedToken?: string;
}
