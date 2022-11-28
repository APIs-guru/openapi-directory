import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkspacesConnectionStatusXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspacesConnectionStatus = "WorkspacesService.DescribeWorkspacesConnectionStatus"
}
export declare class DescribeWorkspacesConnectionStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspacesConnectionStatusXAmzTargetEnum;
}
export declare class DescribeWorkspacesConnectionStatusRequest extends SpeakeasyBase {
    headers: DescribeWorkspacesConnectionStatusHeaders;
    request: shared.DescribeWorkspacesConnectionStatusRequest;
}
export declare class DescribeWorkspacesConnectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkspacesConnectionStatusResult?: shared.DescribeWorkspacesConnectionStatusResult;
    invalidParameterValuesException?: any;
    statusCode: number;
}
