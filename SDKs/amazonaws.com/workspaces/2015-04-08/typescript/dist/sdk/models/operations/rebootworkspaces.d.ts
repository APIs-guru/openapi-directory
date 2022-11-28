import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RebootWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebootWorkspaces = "WorkspacesService.RebootWorkspaces"
}
export declare class RebootWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootWorkspacesXAmzTargetEnum;
}
export declare class RebootWorkspacesRequest extends SpeakeasyBase {
    headers: RebootWorkspacesHeaders;
    request: shared.RebootWorkspacesRequest;
}
export declare class RebootWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    rebootWorkspacesResult?: shared.RebootWorkspacesResult;
    statusCode: number;
}
