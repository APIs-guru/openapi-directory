import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportProjectResult
/** 
 *  Result structure used for requests to export project configuration details. 
**/
export class ExportProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=shareUrl" })
  shareUrl?: string;

  @Metadata({ data: "json, name=snapshotId" })
  snapshotId?: string;
}
