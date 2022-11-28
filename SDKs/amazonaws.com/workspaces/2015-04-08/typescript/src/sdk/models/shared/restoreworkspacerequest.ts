import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
