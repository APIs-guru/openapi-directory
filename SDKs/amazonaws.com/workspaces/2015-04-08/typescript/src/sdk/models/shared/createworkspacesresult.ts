import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateWorkspaceRequest } from "./failedcreateworkspacerequest";
import { Workspace } from "./workspace";



export class CreateWorkspacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedRequests", elemType: FailedCreateWorkspaceRequest })
  failedRequests?: FailedCreateWorkspaceRequest[];

  @SpeakeasyMetadata({ data: "json, name=PendingRequests", elemType: Workspace })
  pendingRequests?: Workspace[];
}
