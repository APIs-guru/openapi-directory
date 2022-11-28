import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRawMasterbrandPathParams extends SpeakeasyBase {
    mbid: string;
}
export declare class GetRawMasterbrandRequest extends SpeakeasyBase {
    pathParams: GetRawMasterbrandPathParams;
}
export declare class GetRawMasterbrandResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
