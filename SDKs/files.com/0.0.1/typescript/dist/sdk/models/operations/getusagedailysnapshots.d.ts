import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsageDailySnapshotsQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
}
export declare class GetUsageDailySnapshotsRequest extends SpeakeasyBase {
    queryParams: GetUsageDailySnapshotsQueryParams;
}
export declare class GetUsageDailySnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageDailySnapshotEntities?: shared.UsageDailySnapshotEntity[];
}
