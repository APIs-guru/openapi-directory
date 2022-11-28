import { SpeakeasyBase } from "../../../internal/utils";
import { LastResourceDataSyncStatusEnum } from "./lastresourcedatasyncstatusenum";
import { ResourceDataSyncS3Destination } from "./resourcedatasyncs3destination";
import { ResourceDataSyncSourceWithState } from "./resourcedatasyncsourcewithstate";
/**
 * Information about a resource data sync configuration, including its current status and last successful sync.
**/
export declare class ResourceDataSyncItem extends SpeakeasyBase {
    lastStatus?: LastResourceDataSyncStatusEnum;
    lastSuccessfulSyncTime?: Date;
    lastSyncStatusMessage?: string;
    lastSyncTime?: Date;
    s3Destination?: ResourceDataSyncS3Destination;
    syncCreatedTime?: Date;
    syncLastModifiedTime?: Date;
    syncName?: string;
    syncSource?: ResourceDataSyncSourceWithState;
    syncType?: string;
}
