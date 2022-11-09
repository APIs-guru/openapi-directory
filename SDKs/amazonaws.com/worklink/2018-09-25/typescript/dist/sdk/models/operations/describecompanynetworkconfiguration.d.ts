import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeCompanyNetworkConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCompanyNetworkConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
}
export declare class DescribeCompanyNetworkConfigurationRequest extends SpeakeasyBase {
    headers: DescribeCompanyNetworkConfigurationHeaders;
    request: DescribeCompanyNetworkConfigurationRequestBody;
}
export declare class DescribeCompanyNetworkConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    describeCompanyNetworkConfigurationResponse?: shared.DescribeCompanyNetworkConfigurationResponse;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
