import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopWorkspacesXAmzTargetEnum {
    WorkspacesServiceStopWorkspaces = "WorkspacesService.StopWorkspaces"
}
export declare class StopWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopWorkspacesXAmzTargetEnum;
}
export declare class StopWorkspacesRequest extends SpeakeasyBase {
    headers: StopWorkspacesHeaders;
    request: shared.StopWorkspacesRequest;
}
export declare class StopWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopWorkspacesResult?: shared.StopWorkspacesResult;
}
