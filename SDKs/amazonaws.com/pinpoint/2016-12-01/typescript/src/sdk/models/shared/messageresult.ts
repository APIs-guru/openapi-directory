import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryStatusEnum } from "./deliverystatusenum";


// MessageResult
/** 
 * Provides information about the results of sending a message directly to an endpoint address.
**/
export class MessageResult extends SpeakeasyBase {
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
