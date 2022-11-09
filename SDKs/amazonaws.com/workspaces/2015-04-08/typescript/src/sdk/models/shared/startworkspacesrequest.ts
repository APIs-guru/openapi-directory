import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StartRequest } from "./startrequest";


export class StartWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StartWorkspaceRequests", elemType: shared.StartRequest })
  startWorkspaceRequests: StartRequest[];
}
