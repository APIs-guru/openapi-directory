import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRawAncestorsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawAncestorsRequest extends SpeakeasyBase {
    pathParams: GetRawAncestorsPathParams;
}
export declare class GetRawAncestorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
