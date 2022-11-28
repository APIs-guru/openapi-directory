import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebuildWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebuildWorkspaces = "WorkspacesService.RebuildWorkspaces"
}
export declare class RebuildWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebuildWorkspacesXAmzTargetEnum;
}
export declare class RebuildWorkspacesRequest extends SpeakeasyBase {
    headers: RebuildWorkspacesHeaders;
    request: shared.RebuildWorkspacesRequest;
}
export declare class RebuildWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    rebuildWorkspacesResult?: shared.RebuildWorkspacesResult;
    statusCode: number;
}
