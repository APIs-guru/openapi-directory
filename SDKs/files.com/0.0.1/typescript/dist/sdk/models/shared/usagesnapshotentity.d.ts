import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Usage Snapshots
**/
export declare class UsageSnapshotEntity extends SpeakeasyBase {
    createdAt?: Date;
    currentStorage?: number;
    deletedFilesCountedInMinimum?: number;
    deletedFilesStorage?: number;
    endAt?: Date;
    highWaterStorage?: number;
    highWaterUserCount?: number;
    id?: number;
    rootStorage?: number;
    startAt?: Date;
    totalDownloads?: number;
    totalUploads?: number;
    updatedAt?: Date;
    usageByTopLevelDir?: Map<string, any>;
}
