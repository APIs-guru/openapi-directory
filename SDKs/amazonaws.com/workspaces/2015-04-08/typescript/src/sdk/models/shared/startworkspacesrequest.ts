import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartRequest } from "./startrequest";



export class StartWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StartWorkspaceRequests", elemType: StartRequest })
  startWorkspaceRequests: StartRequest[];
}
