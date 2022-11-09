import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";


export class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=WorkspaceAccessProperties" })
  workspaceAccessProperties: WorkspaceAccessProperties;
}
