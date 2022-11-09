import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StopRequest } from "./stoprequest";


export class StopWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StopWorkspaceRequests", elemType: shared.StopRequest })
  stopWorkspaceRequests: StopRequest[];
}
