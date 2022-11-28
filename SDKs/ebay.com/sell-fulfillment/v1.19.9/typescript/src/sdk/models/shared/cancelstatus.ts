import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelRequest } from "./cancelrequest";



// CancelStatus
/** 
 * This type contains information about any requests that have been made to cancel an order.
**/
export class CancelStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelRequests", elemType: CancelRequest })
  cancelRequests?: CancelRequest[];

  @SpeakeasyMetadata({ data: "json, name=cancelState" })
  cancelState?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelledDate" })
  cancelledDate?: string;
}
