import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchSystemInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchSystemInstancesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceSearchSystemInstances = "IotThingsGraphFrontEndService.SearchSystemInstances"
}
export declare class SearchSystemInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchSystemInstancesXAmzTargetEnum;
}
export declare class SearchSystemInstancesRequest extends SpeakeasyBase {
    queryParams: SearchSystemInstancesQueryParams;
    headers: SearchSystemInstancesHeaders;
    request: shared.SearchSystemInstancesRequest;
}
export declare class SearchSystemInstancesResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    searchSystemInstancesResponse?: shared.SearchSystemInstancesResponse;
    statusCode: number;
    throttlingException?: any;
}
