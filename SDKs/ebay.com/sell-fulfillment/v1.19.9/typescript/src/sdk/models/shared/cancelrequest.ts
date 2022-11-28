import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelRequest
/** 
 * This type contains information about a buyer request to cancel an order.
**/
export class CancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelCompletedDate" })
  cancelCompletedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelInitiator" })
  cancelInitiator?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelReason" })
  cancelReason?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelRequestId" })
  cancelRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelRequestState" })
  cancelRequestState?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelRequestedDate" })
  cancelRequestedDate?: string;
}
