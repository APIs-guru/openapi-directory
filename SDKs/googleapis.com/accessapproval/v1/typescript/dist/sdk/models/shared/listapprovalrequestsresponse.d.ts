import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalRequest } from "./approvalrequest";
/**
 * Response to listing of ApprovalRequest objects.
**/
export declare class ListApprovalRequestsResponse extends SpeakeasyBase {
    approvalRequests?: ApprovalRequest[];
    nextPageToken?: string;
}
