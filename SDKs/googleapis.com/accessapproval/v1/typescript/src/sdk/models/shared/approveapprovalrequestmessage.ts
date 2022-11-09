import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApproveApprovalRequestMessage
/** 
 * Request to approve an ApprovalRequest.
**/
export class ApproveApprovalRequestMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
