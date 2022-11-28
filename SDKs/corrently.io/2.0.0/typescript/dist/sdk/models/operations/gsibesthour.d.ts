import { SpeakeasyBase } from "../../../internal/utils";
export declare class GsiBesthourQueryParams extends SpeakeasyBase {
    hours?: number;
    key?: string;
    timeframe?: number;
    zip?: string;
}
export declare class GsiBesthourRequest extends SpeakeasyBase {
    queryParams: GsiBesthourQueryParams;
}
export declare class GsiBesthourResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gsiBesthour200ApplicationJsonBoolean?: boolean;
}
