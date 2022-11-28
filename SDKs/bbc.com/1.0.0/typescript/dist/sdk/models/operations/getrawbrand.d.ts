import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRawBrandPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawBrandRequest extends SpeakeasyBase {
    pathParams: GetRawBrandPathParams;
}
export declare class GetRawBrandResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
