import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourceDataSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SyncName" })
  syncName: string;

  @SpeakeasyMetadata({ data: "json, name=SyncType" })
  syncType?: string;
}
