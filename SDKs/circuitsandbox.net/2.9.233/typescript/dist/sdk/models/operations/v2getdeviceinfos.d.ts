import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V2GetDeviceInfosSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class V2GetDeviceInfosRequest extends SpeakeasyBase {
    security: V2GetDeviceInfosSecurity;
}
export declare class V2GetDeviceInfosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
