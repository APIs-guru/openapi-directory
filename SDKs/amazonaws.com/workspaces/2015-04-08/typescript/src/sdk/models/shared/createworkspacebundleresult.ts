import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceBundle } from "./workspacebundle";



export class CreateWorkspaceBundleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceBundle" })
  workspaceBundle?: WorkspaceBundle;
}
