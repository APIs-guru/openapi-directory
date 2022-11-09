import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeGatewayCapabilityConfigurationPathParams extends SpeakeasyBase {
    capabilityNamespace: string;
    gatewayId: string;
}
export declare class DescribeGatewayCapabilityConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeGatewayCapabilityConfigurationRequest extends SpeakeasyBase {
    pathParams: DescribeGatewayCapabilityConfigurationPathParams;
    headers: DescribeGatewayCapabilityConfigurationHeaders;
}
export declare class DescribeGatewayCapabilityConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeGatewayCapabilityConfigurationResponse?: shared.DescribeGatewayCapabilityConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
