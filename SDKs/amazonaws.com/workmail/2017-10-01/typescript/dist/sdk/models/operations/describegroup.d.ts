import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeGroupXAmzTargetEnum {
    WorkMailServiceDescribeGroup = "WorkMailService.DescribeGroup"
}
export declare class DescribeGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGroupXAmzTargetEnum;
}
export declare class DescribeGroupRequest extends SpeakeasyBase {
    headers: DescribeGroupHeaders;
    request: shared.DescribeGroupRequest;
}
export declare class DescribeGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeGroupResponse?: shared.DescribeGroupResponse;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
