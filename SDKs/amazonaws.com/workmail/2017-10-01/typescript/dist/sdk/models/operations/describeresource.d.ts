import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeResourceXAmzTargetEnum {
    WorkMailServiceDescribeResource = "WorkMailService.DescribeResource"
}
export declare class DescribeResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceXAmzTargetEnum;
}
export declare class DescribeResourceRequest extends SpeakeasyBase {
    headers: DescribeResourceHeaders;
    request: shared.DescribeResourceRequest;
}
export declare class DescribeResourceResponse extends SpeakeasyBase {
    contentType: string;
    describeResourceResponse?: shared.DescribeResourceResponse;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
