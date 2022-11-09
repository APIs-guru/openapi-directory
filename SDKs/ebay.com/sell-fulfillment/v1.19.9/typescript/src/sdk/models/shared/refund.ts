import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Refund
/** 
 * This is the base type of the issueRefund response payload. As long as the issueRefund method does not trigger an error, a response payload will be returned.
**/
export class Refund extends SpeakeasyBase {
  @Metadata({ data: "json, name=refundId" })
  refundId?: string;

  @Metadata({ data: "json, name=refundStatus" })
  refundStatus?: string;
}
