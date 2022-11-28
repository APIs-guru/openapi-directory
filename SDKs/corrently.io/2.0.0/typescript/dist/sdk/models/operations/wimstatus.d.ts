import { SpeakeasyBase } from "../../../internal/utils";
export declare class WimstatusQueryParams extends SpeakeasyBase {
    vid?: string;
}
export declare class Wimstatus200ApplicationJson extends SpeakeasyBase {
    wimStarted?: number;
    wimStatus?: string;
}
export declare class WimstatusRequest extends SpeakeasyBase {
    queryParams: WimstatusQueryParams;
}
export declare class WimstatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wimstatus200ApplicationJsonObject?: Wimstatus200ApplicationJson;
}
