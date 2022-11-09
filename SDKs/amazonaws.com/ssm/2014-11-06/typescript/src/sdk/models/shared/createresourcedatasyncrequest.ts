import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";


export class CreateResourceDataSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Destination" })
  s3Destination?: ResourceDataSyncS3Destination;

  @Metadata({ data: "json, name=SyncName" })
  syncName: string;

  @Metadata({ data: "json, name=SyncSource" })
  syncSource?: ResourceDataSyncSource;

  @Metadata({ data: "json, name=SyncType" })
  syncType?: string;
}
