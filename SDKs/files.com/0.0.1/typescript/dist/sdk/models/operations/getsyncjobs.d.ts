import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSyncJobsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetSyncJobsRequest extends SpeakeasyBase {
    queryParams: GetSyncJobsQueryParams;
}
export declare class GetSyncJobsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    syncJobEntities?: shared.SyncJobEntity[];
}
