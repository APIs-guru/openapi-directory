import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";



// ListPaymentsResponse
/** 
 * Response definition for the payments list rpc.
**/
export class ListPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payments", elemType: Payment })
  payments?: Payment[];
}
