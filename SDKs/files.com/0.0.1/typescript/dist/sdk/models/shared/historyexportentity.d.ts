import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Show History Export
**/
export declare class HistoryExportEntity extends SpeakeasyBase {
    endAt?: Date;
    historyVersion?: string;
    id?: number;
    queryAction?: string;
    queryDestination?: string;
    queryFailureType?: string;
    queryFileId?: string;
    queryFolder?: string;
    queryInterface?: string;
    queryIp?: string;
    queryParentId?: string;
    queryPath?: string;
    querySrc?: string;
    queryTargetId?: string;
    queryTargetName?: string;
    queryTargetPermission?: string;
    queryTargetPermissionSet?: string;
    queryTargetPlatform?: string;
    queryTargetUserId?: string;
    queryTargetUsername?: string;
    queryUserId?: string;
    queryUsername?: string;
    resultsUrl?: string;
    startAt?: Date;
    status?: string;
}
