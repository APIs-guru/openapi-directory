import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeHomeRegionControlsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeHomeRegionControlsXAmzTargetEnum {
    AwsMigrationHubMultiAccountServiceDescribeHomeRegionControls = "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls"
}
export declare class DescribeHomeRegionControlsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHomeRegionControlsXAmzTargetEnum;
}
export declare class DescribeHomeRegionControlsRequest extends SpeakeasyBase {
    queryParams: DescribeHomeRegionControlsQueryParams;
    headers: DescribeHomeRegionControlsHeaders;
    request: shared.DescribeHomeRegionControlsRequest;
}
export declare class DescribeHomeRegionControlsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeHomeRegionControlsResult?: shared.DescribeHomeRegionControlsResult;
    internalServerError?: any;
    invalidInputException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
