import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LastResourceDataSyncStatusEnum } from "./lastresourcedatasyncstatusenum";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSourceWithState } from "./resourcedatasyncsourcewithstate";


// ResourceDataSyncItem
/** 
 * Information about a resource data sync configuration, including its current status and last successful sync.
**/
export class ResourceDataSyncItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastStatus" })
  lastStatus?: LastResourceDataSyncStatusEnum;

  @Metadata({ data: "json, name=LastSuccessfulSyncTime" })
  lastSuccessfulSyncTime?: Date;

  @Metadata({ data: "json, name=LastSyncStatusMessage" })
  lastSyncStatusMessage?: string;

  @Metadata({ data: "json, name=LastSyncTime" })
  lastSyncTime?: Date;

  @Metadata({ data: "json, name=S3Destination" })
  s3Destination?: ResourceDataSyncS3Destination;

  @Metadata({ data: "json, name=SyncCreatedTime" })
  syncCreatedTime?: Date;

  @Metadata({ data: "json, name=SyncLastModifiedTime" })
  syncLastModifiedTime?: Date;

  @Metadata({ data: "json, name=SyncName" })
  syncName?: string;

  @Metadata({ data: "json, name=SyncSource" })
  syncSource?: ResourceDataSyncSourceWithState;

  @Metadata({ data: "json, name=SyncType" })
  syncType?: string;
}
