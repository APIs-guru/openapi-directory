import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPendingAssignmentsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestPendingAssignmentsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestPendingAssignmentsRequest extends SpeakeasyBase {
    queryParams: RequestPendingAssignmentsQueryParams;
    headers: RequestPendingAssignmentsHeaders;
}
export declare class RequestPendingAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    pendingAssignmentList?: shared.PendingAssignmentList;
    statusCode: number;
}
