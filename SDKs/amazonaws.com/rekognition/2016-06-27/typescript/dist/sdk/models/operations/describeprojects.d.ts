import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProjectsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeProjectsXAmzTargetEnum {
    RekognitionServiceDescribeProjects = "RekognitionService.DescribeProjects"
}
export declare class DescribeProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectsXAmzTargetEnum;
}
export declare class DescribeProjectsRequest extends SpeakeasyBase {
    queryParams: DescribeProjectsQueryParams;
    headers: DescribeProjectsHeaders;
    request: shared.DescribeProjectsRequest;
}
export declare class DescribeProjectsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeProjectsResponse?: shared.DescribeProjectsResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
