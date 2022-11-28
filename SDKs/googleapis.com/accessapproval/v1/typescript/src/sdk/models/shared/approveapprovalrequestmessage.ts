import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApproveApprovalRequestMessage
/** 
 * Request to approve an ApprovalRequest.
**/
export class ApproveApprovalRequestMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
