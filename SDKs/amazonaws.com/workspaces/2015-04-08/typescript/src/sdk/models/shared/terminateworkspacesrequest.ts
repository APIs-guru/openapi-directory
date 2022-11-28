import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminateRequest } from "./terminaterequest";



export class TerminateWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TerminateWorkspaceRequests", elemType: TerminateRequest })
  terminateWorkspaceRequests: TerminateRequest[];
}
