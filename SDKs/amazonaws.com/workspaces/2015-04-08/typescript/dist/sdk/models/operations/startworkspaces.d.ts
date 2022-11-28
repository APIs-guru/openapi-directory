import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartWorkspacesXAmzTargetEnum {
    WorkspacesServiceStartWorkspaces = "WorkspacesService.StartWorkspaces"
}
export declare class StartWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkspacesXAmzTargetEnum;
}
export declare class StartWorkspacesRequest extends SpeakeasyBase {
    headers: StartWorkspacesHeaders;
    request: shared.StartWorkspacesRequest;
}
export declare class StartWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    startWorkspacesResult?: shared.StartWorkspacesResult;
    statusCode: number;
}
