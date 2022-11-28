import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeLoggingConfigurationXAmzTargetEnum {
    NetworkFirewall20201112DescribeLoggingConfiguration = "NetworkFirewall_20201112.DescribeLoggingConfiguration"
}
export declare class DescribeLoggingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLoggingConfigurationXAmzTargetEnum;
}
export declare class DescribeLoggingConfigurationRequest extends SpeakeasyBase {
    headers: DescribeLoggingConfigurationHeaders;
    request: shared.DescribeLoggingConfigurationRequest;
}
export declare class DescribeLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeLoggingConfigurationResponse?: shared.DescribeLoggingConfigurationResponse;
    internalServerError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
