import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceProperties } from "./workspaceproperties";


export class ModifyWorkspacePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;

  @Metadata({ data: "json, name=WorkspaceProperties" })
  workspaceProperties: WorkspaceProperties;
}
