import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceCreationProperties } from "./workspacecreationproperties";


export class ModifyWorkspaceCreationPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=WorkspaceCreationProperties" })
  workspaceCreationProperties: WorkspaceCreationProperties;
}
