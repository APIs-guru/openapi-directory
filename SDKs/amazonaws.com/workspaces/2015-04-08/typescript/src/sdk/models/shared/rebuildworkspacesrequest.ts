import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RebuildRequest } from "./rebuildrequest";


export class RebuildWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RebuildWorkspaceRequests", elemType: shared.RebuildRequest })
  rebuildWorkspaceRequests: RebuildRequest[];
}
