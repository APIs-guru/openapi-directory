import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRawPromotionPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawPromotionRequest extends SpeakeasyBase {
    pathParams: GetRawPromotionPathParams;
}
export declare class GetRawPromotionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
