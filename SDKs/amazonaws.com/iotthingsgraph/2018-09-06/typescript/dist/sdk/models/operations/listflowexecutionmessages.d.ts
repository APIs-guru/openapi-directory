import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFlowExecutionMessagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListFlowExecutionMessagesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceListFlowExecutionMessages = "IotThingsGraphFrontEndService.ListFlowExecutionMessages"
}
export declare class ListFlowExecutionMessagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFlowExecutionMessagesXAmzTargetEnum;
}
export declare class ListFlowExecutionMessagesRequest extends SpeakeasyBase {
    queryParams: ListFlowExecutionMessagesQueryParams;
    headers: ListFlowExecutionMessagesHeaders;
    request: shared.ListFlowExecutionMessagesRequest;
}
export declare class ListFlowExecutionMessagesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listFlowExecutionMessagesResponse?: shared.ListFlowExecutionMessagesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
