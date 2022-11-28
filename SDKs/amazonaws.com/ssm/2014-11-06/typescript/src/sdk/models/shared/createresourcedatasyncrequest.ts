import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSource } from "./resourcedatasyncsource";



export class CreateResourceDataSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Destination" })
  s3Destination?: ResourceDataSyncS3Destination;

  @SpeakeasyMetadata({ data: "json, name=SyncName" })
  syncName: string;

  @SpeakeasyMetadata({ data: "json, name=SyncSource" })
  syncSource?: ResourceDataSyncSource;

  @SpeakeasyMetadata({ data: "json, name=SyncType" })
  syncType?: string;
}
