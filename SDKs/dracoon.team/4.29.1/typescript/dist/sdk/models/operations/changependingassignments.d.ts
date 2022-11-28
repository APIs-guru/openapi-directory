import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePendingAssignmentsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ChangePendingAssignmentsRequest extends SpeakeasyBase {
    headers: ChangePendingAssignmentsHeaders;
    request: shared.PendingAssignmentsRequest;
}
export declare class ChangePendingAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
