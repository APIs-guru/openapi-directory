import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedWorkspaceChangeRequest } from "./failedworkspacechangerequest";



export class RebootWorkspacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedRequests", elemType: FailedWorkspaceChangeRequest })
  failedRequests?: FailedWorkspaceChangeRequest[];
}
