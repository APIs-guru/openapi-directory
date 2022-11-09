import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRawImagePathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawImageRequest extends SpeakeasyBase {
    pathParams: GetRawImagePathParams;
}
export declare class GetRawImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
