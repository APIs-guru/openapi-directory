import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsGetHitsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GroupsGetHitsFilterEnum {
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare enum GroupsGetHitsTimeframeEnum {
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
export declare class GroupsGetHitsQueryParams extends SpeakeasyBase {
    filter?: GroupsGetHitsFilterEnum;
    fromDay?: string;
    limit?: number;
    offset?: string;
    timeframe: GroupsGetHitsTimeframeEnum;
    toDay?: string;
}
export declare class GroupsGetHitsRequest extends SpeakeasyBase {
    pathParams: GroupsGetHitsPathParams;
    queryParams: GroupsGetHitsQueryParams;
}
export declare class GroupsGetHitsResponse extends SpeakeasyBase {
    apiCoreDtoClickStreamHitListPage?: shared.ApiCoreDtoClickStreamHitListPage;
    contentType: string;
    statusCode: number;
}
