import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsGetHitsPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare enum ConversionsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare enum ConversionsGetHitsTimeframeEnum {
    Yesterday = "yesterday",
    Last7 = "last7",
    Last30 = "last30",
    Lastmonth = "lastmonth",
    Currentmonth = "currentmonth",
    Previousmonth = "previousmonth",
    Last90 = "last90",
    Last120 = "last120",
    Last180 = "last180",
    Custom = "custom"
}
export declare class ConversionsGetHitsQueryParams extends SpeakeasyBase {
    filter?: ConversionsGetHitsFilterEnum;
    fromDay?: string;
    limit?: number;
    offset?: string;
    timeframe: ConversionsGetHitsTimeframeEnum;
    toDay?: string;
}
export declare class ConversionsGetHitsRequest extends SpeakeasyBase {
    pathParams: ConversionsGetHitsPathParams;
    queryParams: ConversionsGetHitsQueryParams;
}
export declare class ConversionsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
}
