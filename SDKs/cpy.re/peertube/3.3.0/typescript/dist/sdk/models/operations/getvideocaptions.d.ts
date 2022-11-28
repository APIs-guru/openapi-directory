import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoCaptionsPathParams extends SpeakeasyBase {
    id: any;
}
export declare class GetVideoCaptions200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetVideoCaptionsRequest extends SpeakeasyBase {
    pathParams: GetVideoCaptionsPathParams;
}
export declare class GetVideoCaptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVideoCaptions200ApplicationJsonObject?: GetVideoCaptions200ApplicationJson;
}
