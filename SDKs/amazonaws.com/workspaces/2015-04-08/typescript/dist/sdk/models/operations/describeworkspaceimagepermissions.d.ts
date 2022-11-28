import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkspaceImagePermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceImagePermissions = "WorkspacesService.DescribeWorkspaceImagePermissions"
}
export declare class DescribeWorkspaceImagePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceImagePermissionsXAmzTargetEnum;
}
export declare class DescribeWorkspaceImagePermissionsRequest extends SpeakeasyBase {
    headers: DescribeWorkspaceImagePermissionsHeaders;
    request: shared.DescribeWorkspaceImagePermissionsRequest;
}
export declare class DescribeWorkspaceImagePermissionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeWorkspaceImagePermissionsResult?: shared.DescribeWorkspaceImagePermissionsResult;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
