import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeUserXAmzTargetEnum {
    WorkMailServiceDescribeUser = "WorkMailService.DescribeUser"
}
export declare class DescribeUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUserXAmzTargetEnum;
}
export declare class DescribeUserRequest extends SpeakeasyBase {
    headers: DescribeUserHeaders;
    request: shared.DescribeUserRequest;
}
export declare class DescribeUserResponse extends SpeakeasyBase {
    contentType: string;
    describeUserResponse?: shared.DescribeUserResponse;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
