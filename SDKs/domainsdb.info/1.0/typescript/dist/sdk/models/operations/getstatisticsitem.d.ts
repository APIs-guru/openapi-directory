import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatisticsItemPathParams extends SpeakeasyBase {
    zone: string;
}
export declare class GetStatisticsItemQueryParams extends SpeakeasyBase {
    limit?: number;
    page?: string;
}
export declare class GetStatisticsItemRequest extends SpeakeasyBase {
    pathParams: GetStatisticsItemPathParams;
    queryParams: GetStatisticsItemQueryParams;
}
export declare class GetStatisticsItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zoneStats?: shared.ZoneStats;
}
