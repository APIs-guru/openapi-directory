import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBandwidthSnapshotsQueryParams extends SpeakeasyBase {
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
export declare class GetBandwidthSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetBandwidthSnapshotsQueryParams;
}
export declare class GetBandwidthSnapshotsResponse extends SpeakeasyBase {
    bandwidthSnapshotEntities?: shared.BandwidthSnapshotEntity[];
    contentType: string;
    statusCode: number;
}
