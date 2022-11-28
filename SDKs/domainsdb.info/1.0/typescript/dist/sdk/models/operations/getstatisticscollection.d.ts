import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatisticsCollectionQueryParams extends SpeakeasyBase {
    limit?: number;
    page?: string;
}
export declare class GetStatisticsCollectionRequest extends SpeakeasyBase {
    queryParams: GetStatisticsCollectionQueryParams;
}
export declare class GetStatisticsCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zoneStats?: shared.ZoneStats[];
}
