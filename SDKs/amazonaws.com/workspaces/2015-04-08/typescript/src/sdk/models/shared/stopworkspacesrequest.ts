import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopRequest } from "./stoprequest";



export class StopWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StopWorkspaceRequests", elemType: StopRequest })
  stopWorkspaceRequests: StopRequest[];
}
