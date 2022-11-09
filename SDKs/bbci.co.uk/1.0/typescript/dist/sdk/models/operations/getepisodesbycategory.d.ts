import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEpisodesByCategoryPathParams extends SpeakeasyBase {
    category: string;
}
export declare enum GetEpisodesByCategorySortEnum {
    Recent = "recent",
    Popular = "popular"
}
export declare class GetEpisodesByCategoryQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
    sort?: GetEpisodesByCategorySortEnum;
}
export declare class GetEpisodesByCategoryRequest extends SpeakeasyBase {
    pathParams: GetEpisodesByCategoryPathParams;
    queryParams: GetEpisodesByCategoryQueryParams;
}
export declare class GetEpisodesByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
