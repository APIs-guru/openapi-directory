import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkspaceSnapshotsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceSnapshots = "WorkspacesService.DescribeWorkspaceSnapshots"
}
export declare class DescribeWorkspaceSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceSnapshotsXAmzTargetEnum;
}
export declare class DescribeWorkspaceSnapshotsRequest extends SpeakeasyBase {
    headers: DescribeWorkspaceSnapshotsHeaders;
    request: shared.DescribeWorkspaceSnapshotsRequest;
}
export declare class DescribeWorkspaceSnapshotsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeWorkspaceSnapshotsResult?: shared.DescribeWorkspaceSnapshotsResult;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
