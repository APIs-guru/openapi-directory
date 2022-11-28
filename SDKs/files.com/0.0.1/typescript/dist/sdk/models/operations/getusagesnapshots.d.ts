import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsageSnapshotsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetUsageSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetUsageSnapshotsQueryParams;
}
export declare class GetUsageSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageSnapshotEntities?: shared.UsageSnapshotEntity[];
}
