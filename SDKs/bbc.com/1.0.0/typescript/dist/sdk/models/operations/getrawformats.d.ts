import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRawFormatsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawFormatsRequest extends SpeakeasyBase {
    pathParams: GetRawFormatsPathParams;
}
export declare class GetRawFormatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
