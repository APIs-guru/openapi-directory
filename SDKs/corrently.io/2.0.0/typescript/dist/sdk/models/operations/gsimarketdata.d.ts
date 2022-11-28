import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GsiMarketdataQueryParams extends SpeakeasyBase {
    zip?: string;
}
export declare class GsiMarketdata200ApplicationJson extends SpeakeasyBase {
    data?: shared.MarketData[];
}
export declare class GsiMarketdataRequest extends SpeakeasyBase {
    queryParams: GsiMarketdataQueryParams;
}
export declare class GsiMarketdataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gsiMarketdata200ApplicationJsonObject?: GsiMarketdata200ApplicationJson;
}
