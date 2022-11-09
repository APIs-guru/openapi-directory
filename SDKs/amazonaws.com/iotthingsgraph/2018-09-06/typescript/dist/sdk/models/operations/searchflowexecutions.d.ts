import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchFlowExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchFlowExecutionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchFlowExecutions = "IotThingsGraphFrontEndService.SearchFlowExecutions"
}
export declare class SearchFlowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchFlowExecutionsXAmzTargetEnum;
}
export declare class SearchFlowExecutionsRequest extends SpeakeasyBase {
    queryParams: SearchFlowExecutionsQueryParams;
    headers: SearchFlowExecutionsHeaders;
    request: shared.SearchFlowExecutionsRequest;
}
export declare class SearchFlowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    searchFlowExecutionsResponse?: shared.SearchFlowExecutionsResponse;
    statusCode: number;
    throttlingException?: any;
}
