import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePermissionsXAmzTargetEnum {
    OpsWorks20130218DescribePermissions = "OpsWorks_20130218.DescribePermissions"
}
export declare class DescribePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePermissionsXAmzTargetEnum;
}
export declare class DescribePermissionsRequest extends SpeakeasyBase {
    headers: DescribePermissionsHeaders;
    request: shared.DescribePermissionsRequest;
}
export declare class DescribePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    describePermissionsResult?: shared.DescribePermissionsResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
