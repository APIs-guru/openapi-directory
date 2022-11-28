import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamProcessorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStreamProcessorsXAmzTargetEnum {
    RekognitionServiceListStreamProcessors = "RekognitionService.ListStreamProcessors"
}
export declare class ListStreamProcessorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStreamProcessorsXAmzTargetEnum;
}
export declare class ListStreamProcessorsRequest extends SpeakeasyBase {
    queryParams: ListStreamProcessorsQueryParams;
    headers: ListStreamProcessorsHeaders;
    request: shared.ListStreamProcessorsRequest;
}
export declare class ListStreamProcessorsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    listStreamProcessorsResponse?: shared.ListStreamProcessorsResponse;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
