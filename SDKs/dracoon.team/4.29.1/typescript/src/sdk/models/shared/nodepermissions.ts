import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodePermissions
/** 
 * Node permissions
**/
export class NodePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=change" })
  change: boolean;

  @SpeakeasyMetadata({ data: "json, name=create" })
  create: boolean;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteRecycleBin" })
  deleteRecycleBin: boolean;

  @SpeakeasyMetadata({ data: "json, name=manage" })
  manage: boolean;

  @SpeakeasyMetadata({ data: "json, name=manageDownloadShare" })
  manageDownloadShare: boolean;

  @SpeakeasyMetadata({ data: "json, name=manageUploadShare" })
  manageUploadShare: boolean;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read: boolean;

  @SpeakeasyMetadata({ data: "json, name=readRecycleBin" })
  readRecycleBin: boolean;

  @SpeakeasyMetadata({ data: "json, name=restoreRecycleBin" })
  restoreRecycleBin: boolean;
}
