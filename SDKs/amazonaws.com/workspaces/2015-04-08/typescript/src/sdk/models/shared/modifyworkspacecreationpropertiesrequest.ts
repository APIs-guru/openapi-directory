import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCreationProperties } from "./workspacecreationproperties";



export class ModifyWorkspaceCreationPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceCreationProperties" })
  workspaceCreationProperties: WorkspaceCreationProperties;
}
