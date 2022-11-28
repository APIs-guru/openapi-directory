import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRawGenreGroupsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawGenreGroupsRequest extends SpeakeasyBase {
    pathParams: GetRawGenreGroupsPathParams;
}
export declare class GetRawGenreGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
