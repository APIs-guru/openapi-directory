import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAddressesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeAddressesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeAddresses = "AWSIESnowballJobManagementService.DescribeAddresses"
}
export declare class DescribeAddressesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAddressesXAmzTargetEnum;
}
export declare class DescribeAddressesRequest extends SpeakeasyBase {
    queryParams: DescribeAddressesQueryParams;
    headers: DescribeAddressesHeaders;
    request: shared.DescribeAddressesRequest;
}
export declare class DescribeAddressesResponse extends SpeakeasyBase {
    contentType: string;
    describeAddressesResult?: shared.DescribeAddressesResult;
    invalidNextTokenException?: any;
    invalidResourceException?: any;
    statusCode: number;
}
