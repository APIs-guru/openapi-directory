import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorkspacesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeWorkspacesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaces = "WorkspacesService.DescribeWorkspaces"
}
export declare class DescribeWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspacesXAmzTargetEnum;
}
export declare class DescribeWorkspacesRequest extends SpeakeasyBase {
    queryParams: DescribeWorkspacesQueryParams;
    headers: DescribeWorkspacesHeaders;
    request: shared.DescribeWorkspacesRequest;
}
export declare class DescribeWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkspacesResult?: shared.DescribeWorkspacesResult;
    invalidParameterValuesException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
