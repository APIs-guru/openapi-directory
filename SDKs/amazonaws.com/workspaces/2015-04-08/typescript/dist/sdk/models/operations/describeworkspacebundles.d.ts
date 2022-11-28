import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorkspaceBundlesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum DescribeWorkspaceBundlesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceBundles = "WorkspacesService.DescribeWorkspaceBundles"
}
export declare class DescribeWorkspaceBundlesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceBundlesXAmzTargetEnum;
}
export declare class DescribeWorkspaceBundlesRequest extends SpeakeasyBase {
    queryParams: DescribeWorkspaceBundlesQueryParams;
    headers: DescribeWorkspaceBundlesHeaders;
    request: shared.DescribeWorkspaceBundlesRequest;
}
export declare class DescribeWorkspaceBundlesResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkspaceBundlesResult?: shared.DescribeWorkspaceBundlesResult;
    invalidParameterValuesException?: any;
    statusCode: number;
}
