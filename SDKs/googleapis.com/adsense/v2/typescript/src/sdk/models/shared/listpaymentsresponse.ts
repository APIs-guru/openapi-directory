import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Payment } from "./payment";


// ListPaymentsResponse
/** 
 * Response definition for the payments list rpc.
**/
export class ListPaymentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=payments", elemType: shared.Payment })
  payments?: Payment[];
}
