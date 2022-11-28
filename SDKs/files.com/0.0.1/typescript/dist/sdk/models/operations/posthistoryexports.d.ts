import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostHistoryExportsRequestBody extends SpeakeasyBase {
    endAt?: Date;
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
    startAt?: Date;
    userId?: number;
}
export declare class PostHistoryExportsRequest extends SpeakeasyBase {
    request?: PostHistoryExportsRequestBody;
}
export declare class PostHistoryExportsResponse extends SpeakeasyBase {
    contentType: string;
    historyExportEntity?: shared.HistoryExportEntity;
    statusCode: number;
}
