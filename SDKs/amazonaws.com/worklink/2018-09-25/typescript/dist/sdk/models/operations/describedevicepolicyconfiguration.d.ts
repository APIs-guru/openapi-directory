import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDevicePolicyConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDevicePolicyConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
}
export declare class DescribeDevicePolicyConfigurationRequest extends SpeakeasyBase {
    headers: DescribeDevicePolicyConfigurationHeaders;
    request: DescribeDevicePolicyConfigurationRequestBody;
}
export declare class DescribeDevicePolicyConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeDevicePolicyConfigurationResponse?: shared.DescribeDevicePolicyConfigurationResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
