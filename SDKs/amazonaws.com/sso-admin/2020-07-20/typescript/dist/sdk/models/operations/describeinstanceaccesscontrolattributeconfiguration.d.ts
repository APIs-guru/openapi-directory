import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SwbExternalServiceDescribeInstanceAccessControlAttributeConfiguration = "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration"
}
export declare class DescribeInstanceAccessControlAttributeConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class DescribeInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    headers: DescribeInstanceAccessControlAttributeConfigurationHeaders;
    request: shared.DescribeInstanceAccessControlAttributeConfigurationRequest;
}
export declare class DescribeInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeInstanceAccessControlAttributeConfigurationResponse?: shared.DescribeInstanceAccessControlAttributeConfigurationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
