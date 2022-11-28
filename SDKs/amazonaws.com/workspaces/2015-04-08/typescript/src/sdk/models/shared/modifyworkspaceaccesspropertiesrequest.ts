import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";



export class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceAccessProperties" })
  workspaceAccessProperties: WorkspaceAccessProperties;
}
