import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListSpeechSynthesisTasksStatusEnum {
    Scheduled = "scheduled",
    InProgress = "inProgress",
    Completed = "completed",
    Failed = "failed"
}
export declare class ListSpeechSynthesisTasksQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    status?: ListSpeechSynthesisTasksStatusEnum;
}
export declare class ListSpeechSynthesisTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSpeechSynthesisTasksRequest extends SpeakeasyBase {
    queryParams: ListSpeechSynthesisTasksQueryParams;
    headers: ListSpeechSynthesisTasksHeaders;
}
export declare class ListSpeechSynthesisTasksResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listSpeechSynthesisTasksOutput?: shared.ListSpeechSynthesisTasksOutput;
    serviceFailureException?: any;
    statusCode: number;
}
