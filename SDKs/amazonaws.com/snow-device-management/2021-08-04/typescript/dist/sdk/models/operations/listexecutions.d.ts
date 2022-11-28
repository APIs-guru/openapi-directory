import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListExecutionsStateEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Rejected = "REJECTED",
    TimedOut = "TIMED_OUT"
}
export declare class ListExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    state?: ListExecutionsStateEnum;
    taskId: string;
}
export declare class ListExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListExecutionsRequest extends SpeakeasyBase {
    queryParams: ListExecutionsQueryParams;
    headers: ListExecutionsHeaders;
}
export declare class ListExecutionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listExecutionsOutput?: shared.ListExecutionsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
