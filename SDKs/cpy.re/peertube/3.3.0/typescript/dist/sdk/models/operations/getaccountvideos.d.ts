import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountVideosPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetAccountVideosQueryParams extends SpeakeasyBase {
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
export declare class GetAccountVideosRequest extends SpeakeasyBase {
    pathParams: GetAccountVideosPathParams;
    queryParams: GetAccountVideosQueryParams;
}
export declare class GetAccountVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
