import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceBundle } from "./workspacebundle";


export class CreateWorkspaceBundleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceBundle" })
  workspaceBundle?: WorkspaceBundle;
}
