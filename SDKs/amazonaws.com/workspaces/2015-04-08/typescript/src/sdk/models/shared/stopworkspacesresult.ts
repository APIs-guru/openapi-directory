import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedWorkspaceChangeRequest } from "./failedworkspacechangerequest";



export class StopWorkspacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedRequests", elemType: FailedWorkspaceChangeRequest })
  failedRequests?: FailedWorkspaceChangeRequest[];
}
