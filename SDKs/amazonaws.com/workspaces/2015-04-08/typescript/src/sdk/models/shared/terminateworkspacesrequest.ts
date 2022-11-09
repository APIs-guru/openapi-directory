import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TerminateRequest } from "./terminaterequest";


export class TerminateWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TerminateWorkspaceRequests", elemType: shared.TerminateRequest })
  terminateWorkspaceRequests: TerminateRequest[];
}
