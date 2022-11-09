import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SyncName" })
  syncName: string;

  @Metadata({ data: "json, name=SyncType" })
  syncType?: string;
}
