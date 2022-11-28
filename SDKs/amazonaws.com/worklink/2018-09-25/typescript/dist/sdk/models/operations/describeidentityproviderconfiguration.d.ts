import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeIdentityProviderConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
}
export declare class DescribeIdentityProviderConfigurationRequest extends SpeakeasyBase {
    headers: DescribeIdentityProviderConfigurationHeaders;
    request: DescribeIdentityProviderConfigurationRequestBody;
}
export declare class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeIdentityProviderConfigurationResponse?: shared.DescribeIdentityProviderConfigurationResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
