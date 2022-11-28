import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoChannelVideosPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class GetVideoChannelVideosQueryParams extends SpeakeasyBase {
    categoryOneOf?: any;
    count?: number;
    filter?: shared.FilterEnum;
    isLive?: boolean;
    languageOneOf?: any;
    licenceOneOf?: any;
    nsfw?: shared.NsfwEnum;
    skipCount?: shared.SkipCountEnum;
    sort?: shared.VideosSortEnum;
    start?: number;
    tagsAllOf?: any;
    tagsOneOf?: any;
}
export declare class GetVideoChannelVideosRequest extends SpeakeasyBase {
    pathParams: GetVideoChannelVideosPathParams;
    queryParams: GetVideoChannelVideosQueryParams;
}
export declare class GetVideoChannelVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
