import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodePermissions
/** 
 * Node permissions
**/
export class NodePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=change" })
  change: boolean;

  @Metadata({ data: "json, name=create" })
  create: boolean;

  @Metadata({ data: "json, name=delete" })
  delete: boolean;

  @Metadata({ data: "json, name=deleteRecycleBin" })
  deleteRecycleBin: boolean;

  @Metadata({ data: "json, name=manage" })
  manage: boolean;

  @Metadata({ data: "json, name=manageDownloadShare" })
  manageDownloadShare: boolean;

  @Metadata({ data: "json, name=manageUploadShare" })
  manageUploadShare: boolean;

  @Metadata({ data: "json, name=read" })
  read: boolean;

  @Metadata({ data: "json, name=readRecycleBin" })
  readRecycleBin: boolean;

  @Metadata({ data: "json, name=restoreRecycleBin" })
  restoreRecycleBin: boolean;
}
