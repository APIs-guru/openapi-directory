import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosQueryParams extends SpeakeasyBase {
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
export declare class GetVideosRequest extends SpeakeasyBase {
    queryParams: GetVideosQueryParams;
}
export declare class GetVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
