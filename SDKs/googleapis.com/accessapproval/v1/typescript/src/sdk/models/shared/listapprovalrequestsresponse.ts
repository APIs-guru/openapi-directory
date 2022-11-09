import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApprovalRequest } from "./approvalrequest";


// ListApprovalRequestsResponse
/** 
 * Response to listing of ApprovalRequest objects.
**/
export class ListApprovalRequestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRequests", elemType: shared.ApprovalRequest })
  approvalRequests?: ApprovalRequest[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
