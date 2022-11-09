import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CancelRequest } from "./cancelrequest";


// CancelStatus
/** 
 * This type contains information about any requests that have been made to cancel an order.
**/
export class CancelStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelRequests", elemType: shared.CancelRequest })
  cancelRequests?: CancelRequest[];

  @Metadata({ data: "json, name=cancelState" })
  cancelState?: string;

  @Metadata({ data: "json, name=cancelledDate" })
  cancelledDate?: string;
}
