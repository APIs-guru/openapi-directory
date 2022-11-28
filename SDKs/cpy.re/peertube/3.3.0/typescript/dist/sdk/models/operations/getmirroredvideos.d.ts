import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMirroredVideosTargetEnum {
    MyVideos = "my-videos",
    RemoteVideos = "remote-videos"
}
export declare class GetMirroredVideosQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: shared.VideoRedundanciesSortEnum;
    start?: number;
    target: GetMirroredVideosTargetEnum;
}
export declare class GetMirroredVideosSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetMirroredVideosRequest extends SpeakeasyBase {
    queryParams: GetMirroredVideosQueryParams;
    security: GetMirroredVideosSecurity;
}
export declare class GetMirroredVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoRedundancies?: any[];
}
