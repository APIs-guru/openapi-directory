import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListHistoricalGwsColorEnum {
    Red = "red",
    White = "white",
    Pink = "pink"
}
export declare enum ListHistoricalGwsOrderingEnum {
    Date = "date",
    MinusDate = "-date",
    Score = "score",
    MinusScore = "-score"
}
export declare class ListHistoricalGwsQueryParams extends SpeakeasyBase {
    color?: ListHistoricalGwsColorEnum;
    isPrimeurs?: boolean;
    limit?: number;
    lwin?: string;
    lwin11?: string;
    offset?: number;
    ordering?: ListHistoricalGwsOrderingEnum;
    vintage?: string;
    wineId?: number[];
}
export declare class ListHistoricalGwsHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class ListHistoricalGwsRequest extends SpeakeasyBase {
    queryParams: ListHistoricalGwsQueryParams;
    headers: ListHistoricalGwsHeaders;
}
export declare class ListHistoricalGwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
