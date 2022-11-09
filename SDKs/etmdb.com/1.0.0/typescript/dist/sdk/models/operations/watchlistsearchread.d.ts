import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class WatchlistSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class WatchlistSearchReadRequest extends SpeakeasyBase {
    pathParams: WatchlistSearchReadPathParams;
}
export declare class WatchlistSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
