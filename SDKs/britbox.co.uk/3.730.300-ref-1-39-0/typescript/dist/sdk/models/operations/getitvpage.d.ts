import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetItvPageItemDetailExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors"
}
export declare enum GetItvPageItemDetailSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}
export declare enum GetItvPageTextEntryFormatEnum {
    Markdown = "markdown",
    Html = "html"
}
export declare class GetItvPageQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemDetailExpand?: GetItvPageItemDetailExpandEnum;
    itemDetailSelectSeason?: GetItvPageItemDetailSelectSeasonEnum;
    lang?: string;
    listPageSize?: number;
    listPageSizeLarge?: number;
    maxListPrefetch?: number;
    maxRating?: string;
    path: string;
    segments?: string[];
    sub?: string;
    textEntryFormat?: GetItvPageTextEntryFormatEnum;
}
export declare class GetItvPageRequest extends SpeakeasyBase {
    queryParams: GetItvPageQueryParams;
}
export declare class GetItvPageResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
