import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLatestTotalsFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetLatestTotalsQueryParams extends SpeakeasyBase {
    format?: GetLatestTotalsFormatEnum;
}
export declare class GetLatestTotals200ApplicationJson extends SpeakeasyBase {
    confirmed?: number;
    critical?: number;
    deaths?: number;
    lastChange?: Date;
    lastUpdate?: Date;
    recovered?: number;
}
export declare class GetLatestTotalsRequest extends SpeakeasyBase {
    queryParams: GetLatestTotalsQueryParams;
}
export declare class GetLatestTotalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getLatestTotals200ApplicationJsonObjects?: GetLatestTotals200ApplicationJson[];
}
