import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRequest } from "./approvalrequest";



// ListApprovalRequestsResponse
/** 
 * Response to listing of ApprovalRequest objects.
**/
export class ListApprovalRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRequests", elemType: ApprovalRequest })
  approvalRequests?: ApprovalRequest[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
