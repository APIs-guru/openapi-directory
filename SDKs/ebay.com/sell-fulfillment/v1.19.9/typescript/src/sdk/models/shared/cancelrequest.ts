import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CancelRequest
/** 
 * This type contains information about a buyer request to cancel an order.
**/
export class CancelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelCompletedDate" })
  cancelCompletedDate?: string;

  @Metadata({ data: "json, name=cancelInitiator" })
  cancelInitiator?: string;

  @Metadata({ data: "json, name=cancelReason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=cancelRequestId" })
  cancelRequestId?: string;

  @Metadata({ data: "json, name=cancelRequestState" })
  cancelRequestState?: string;

  @Metadata({ data: "json, name=cancelRequestedDate" })
  cancelRequestedDate?: string;
}
