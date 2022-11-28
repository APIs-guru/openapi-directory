import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProjectVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeProjectVersionsXAmzTargetEnum {
    RekognitionServiceDescribeProjectVersions = "RekognitionService.DescribeProjectVersions"
}
export declare class DescribeProjectVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectVersionsXAmzTargetEnum;
}
export declare class DescribeProjectVersionsRequest extends SpeakeasyBase {
    queryParams: DescribeProjectVersionsQueryParams;
    headers: DescribeProjectVersionsHeaders;
    request: shared.DescribeProjectVersionsRequest;
}
export declare class DescribeProjectVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeProjectVersionsResponse?: shared.DescribeProjectVersionsResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
