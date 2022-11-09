import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRawEpisodePathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawEpisodeRequest extends SpeakeasyBase {
    pathParams: GetRawEpisodePathParams;
}
export declare class GetRawEpisodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
