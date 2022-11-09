import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
