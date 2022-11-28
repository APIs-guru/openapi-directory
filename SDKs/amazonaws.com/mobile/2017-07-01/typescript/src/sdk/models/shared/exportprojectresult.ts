import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportProjectResult
/** 
 *  Result structure used for requests to export project configuration details. 
**/
export class ExportProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=shareUrl" })
  shareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotId" })
  snapshotId?: string;
}
