import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GsiDispatchQueryParams extends SpeakeasyBase {
    key?: string;
    zip?: string;
}
/**
 * Evaluated timeframe for this request
**/
export declare class GsiDispatch200ApplicationJsonTimeframe extends SpeakeasyBase {
    end?: number;
    start?: number;
}
export declare class GsiDispatch200ApplicationJson extends SpeakeasyBase {
    avgDistanceKm?: number;
    dispatchFrom?: shared.DispatchLocation[];
    dispatchTarget?: shared.DispatchLocation[];
    postmix?: Map<string, any>;
    premix?: Map<string, any>;
    timeframe?: GsiDispatch200ApplicationJsonTimeframe;
}
export declare class GsiDispatchRequest extends SpeakeasyBase {
    queryParams: GsiDispatchQueryParams;
}
export declare class GsiDispatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gsiDispatch200ApplicationJsonObject?: GsiDispatch200ApplicationJson;
}
