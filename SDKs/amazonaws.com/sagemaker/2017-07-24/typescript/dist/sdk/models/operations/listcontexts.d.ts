import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContextsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListContextsXAmzTargetEnum {
    SageMakerListContexts = "SageMaker.ListContexts"
}
export declare class ListContextsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListContextsXAmzTargetEnum;
}
export declare class ListContextsRequest extends SpeakeasyBase {
    queryParams: ListContextsQueryParams;
    headers: ListContextsHeaders;
    request: shared.ListContextsRequest;
}
export declare class ListContextsResponse extends SpeakeasyBase {
    contentType: string;
    listContextsResponse?: shared.ListContextsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
