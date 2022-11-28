import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterWorkspaceDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
