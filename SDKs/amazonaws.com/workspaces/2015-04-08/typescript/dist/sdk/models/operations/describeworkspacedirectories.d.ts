import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorkspaceDirectoriesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum DescribeWorkspaceDirectoriesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceDirectories = "WorkspacesService.DescribeWorkspaceDirectories"
}
export declare class DescribeWorkspaceDirectoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceDirectoriesXAmzTargetEnum;
}
export declare class DescribeWorkspaceDirectoriesRequest extends SpeakeasyBase {
    queryParams: DescribeWorkspaceDirectoriesQueryParams;
    headers: DescribeWorkspaceDirectoriesHeaders;
    request: shared.DescribeWorkspaceDirectoriesRequest;
}
export declare class DescribeWorkspaceDirectoriesResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkspaceDirectoriesResult?: shared.DescribeWorkspaceDirectoriesResult;
    invalidParameterValuesException?: any;
    statusCode: number;
}
