import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";


export class UpdateResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SyncName" })
  syncName: string;

  @Metadata({ data: "json, name=SyncSource" })
  syncSource: ResourceDataSyncSource;

  @Metadata({ data: "json, name=SyncType" })
  syncType: string;
}
