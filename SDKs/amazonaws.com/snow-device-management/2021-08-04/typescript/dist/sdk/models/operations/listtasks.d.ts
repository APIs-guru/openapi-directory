import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListTasksStateEnum {
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
export declare class ListTasksQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    state?: ListTasksStateEnum;
}
export declare class ListTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTasksRequest extends SpeakeasyBase {
    queryParams: ListTasksQueryParams;
    headers: ListTasksHeaders;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTasksOutput?: shared.ListTasksOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
