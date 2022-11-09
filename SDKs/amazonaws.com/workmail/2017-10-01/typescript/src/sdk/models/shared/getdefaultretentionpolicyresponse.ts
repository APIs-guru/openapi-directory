import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FolderConfiguration } from "./folderconfiguration";


export class GetDefaultRetentionPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FolderConfigurations", elemType: shared.FolderConfiguration })
  folderConfigurations?: FolderConfiguration[];

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
