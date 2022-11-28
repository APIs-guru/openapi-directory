import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGlobalwinescoresLatestColorEnum {
    Red = "red",
    White = "white",
    Pink = "pink"
}
export declare enum GetGlobalwinescoresLatestOrderingEnum {
    Date = "date",
    MinusDate = "-date",
    Score = "score",
    MinusScore = "-score"
}
export declare class GetGlobalwinescoresLatestQueryParams extends SpeakeasyBase {
    color?: GetGlobalwinescoresLatestColorEnum;
    isPrimeurs?: boolean;
    limit?: number;
    lwin?: string;
    lwin11?: string;
    offset?: number;
    ordering?: GetGlobalwinescoresLatestOrderingEnum;
    vintage?: string;
    wineId?: number[];
}
export declare class GetGlobalwinescoresLatestHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class GetGlobalwinescoresLatestRequest extends SpeakeasyBase {
    queryParams: GetGlobalwinescoresLatestQueryParams;
    headers: GetGlobalwinescoresLatestHeaders;
}
export declare class GetGlobalwinescoresLatestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
