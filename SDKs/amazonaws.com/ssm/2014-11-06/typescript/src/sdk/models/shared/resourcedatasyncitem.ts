import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastResourceDataSyncStatusEnum } from "./lastresourcedatasyncstatusenum";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSourceWithState } from "./resourcedatasyncsourcewithstate";



// ResourceDataSyncItem
/** 
 * Information about a resource data sync configuration, including its current status and last successful sync.
**/
export class ResourceDataSyncItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastStatus" })
  lastStatus?: LastResourceDataSyncStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastSuccessfulSyncTime" })
  lastSuccessfulSyncTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSyncStatusMessage" })
  lastSyncStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastSyncTime" })
  lastSyncTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=S3Destination" })
  s3Destination?: ResourceDataSyncS3Destination;

  @SpeakeasyMetadata({ data: "json, name=SyncCreatedTime" })
  syncCreatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SyncLastModifiedTime" })
  syncLastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SyncName" })
  syncName?: string;

  @SpeakeasyMetadata({ data: "json, name=SyncSource" })
  syncSource?: ResourceDataSyncSourceWithState;

  @SpeakeasyMetadata({ data: "json, name=SyncType" })
  syncType?: string;
}
