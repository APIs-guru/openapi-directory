import { SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateWorkspaceRequest } from "./failedcreateworkspacerequest";
import { Workspace } from "./workspace";
export declare class CreateWorkspacesResult extends SpeakeasyBase {
    failedRequests?: FailedCreateWorkspaceRequest[];
    pendingRequests?: Workspace[];
}
