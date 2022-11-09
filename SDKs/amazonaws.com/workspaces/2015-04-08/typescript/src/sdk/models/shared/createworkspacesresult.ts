import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedCreateWorkspaceRequest } from "./failedcreateworkspacerequest";
import { Workspace } from "./workspace";


export class CreateWorkspacesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedRequests", elemType: shared.FailedCreateWorkspaceRequest })
  failedRequests?: FailedCreateWorkspaceRequest[];

  @Metadata({ data: "json, name=PendingRequests", elemType: shared.Workspace })
  pendingRequests?: Workspace[];
}
