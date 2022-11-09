import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDataSourcesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeDataSourcesXAmzTargetEnum {
    AmazonMl20141212DescribeDataSources = "AmazonML_20141212.DescribeDataSources"
}
export declare class DescribeDataSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataSourcesXAmzTargetEnum;
}
export declare class DescribeDataSourcesRequest extends SpeakeasyBase {
    queryParams: DescribeDataSourcesQueryParams;
    headers: DescribeDataSourcesHeaders;
    request: shared.DescribeDataSourcesInput;
}
export declare class DescribeDataSourcesResponse extends SpeakeasyBase {
    contentType: string;
    describeDataSourcesOutput?: shared.DescribeDataSourcesOutput;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
