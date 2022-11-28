import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RebuildRequest } from "./rebuildrequest";



export class RebuildWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RebuildWorkspaceRequests", elemType: RebuildRequest })
  rebuildWorkspaceRequests: RebuildRequest[];
}
