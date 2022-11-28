import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";



export class UpdateResourceDataSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SyncName" })
  syncName: string;

  @SpeakeasyMetadata({ data: "json, name=SyncSource" })
  syncSource: ResourceDataSyncSource;

  @SpeakeasyMetadata({ data: "json, name=SyncType" })
  syncType: string;
}
