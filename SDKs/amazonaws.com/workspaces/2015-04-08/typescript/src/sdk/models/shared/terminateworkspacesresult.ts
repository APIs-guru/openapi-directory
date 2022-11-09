import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedWorkspaceChangeRequest } from "./failedworkspacechangerequest";


export class TerminateWorkspacesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedRequests", elemType: shared.FailedWorkspaceChangeRequest })
  failedRequests?: FailedWorkspaceChangeRequest[];
}
