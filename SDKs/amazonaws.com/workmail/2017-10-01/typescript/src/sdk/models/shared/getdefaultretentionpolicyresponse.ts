import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FolderConfiguration } from "./folderconfiguration";



export class GetDefaultRetentionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FolderConfigurations", elemType: FolderConfiguration })
  folderConfigurations?: FolderConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
