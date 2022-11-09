import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterWorkspaceDirectoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;
}
