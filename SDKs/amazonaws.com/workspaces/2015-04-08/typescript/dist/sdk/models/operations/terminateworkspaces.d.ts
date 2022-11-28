import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TerminateWorkspacesXAmzTargetEnum {
    WorkspacesServiceTerminateWorkspaces = "WorkspacesService.TerminateWorkspaces"
}
export declare class TerminateWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateWorkspacesXAmzTargetEnum;
}
export declare class TerminateWorkspacesRequest extends SpeakeasyBase {
    headers: TerminateWorkspacesHeaders;
    request: shared.TerminateWorkspacesRequest;
}
export declare class TerminateWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    terminateWorkspacesResult?: shared.TerminateWorkspacesResult;
}
