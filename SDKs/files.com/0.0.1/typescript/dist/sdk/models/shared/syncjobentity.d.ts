import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Sync Jobs
**/
export declare class SyncJobEntity extends SpeakeasyBase {
    folderBehaviorId?: number;
    queuedAt?: Date;
    regionalWorkerStatus?: string;
    status?: string;
    updatedAt?: Date;
    uuid?: string;
}
