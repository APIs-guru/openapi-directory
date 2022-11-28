import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceProperties } from "./workspaceproperties";



export class ModifyWorkspacePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties: WorkspaceProperties;
}
