import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceRequest } from "./workspacerequest";
/**
 * Describes a WorkSpace that cannot be created.
**/
export declare class FailedCreateWorkspaceRequest extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    workspaceRequest?: WorkspaceRequest;
}
