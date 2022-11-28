import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAddressXAmzTargetEnum {
    AwsieSnowballJobManagementServiceDescribeAddress = "AWSIESnowballJobManagementService.DescribeAddress"
}
export declare class DescribeAddressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAddressXAmzTargetEnum;
}
export declare class DescribeAddressRequest extends SpeakeasyBase {
    headers: DescribeAddressHeaders;
    request: shared.DescribeAddressRequest;
}
export declare class DescribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    describeAddressResult?: shared.DescribeAddressResult;
    invalidResourceException?: any;
    statusCode: number;
}
