import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeSubscriptionsVideosQueryParams extends SpeakeasyBase {
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
export declare class GetUsersMeSubscriptionsVideosSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeSubscriptionsVideosRequest extends SpeakeasyBase {
    queryParams: GetUsersMeSubscriptionsVideosQueryParams;
    security: GetUsersMeSubscriptionsVideosSecurity;
}
export declare class GetUsersMeSubscriptionsVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoListResponse?: any;
}
