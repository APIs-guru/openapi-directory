import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPageItemDetailExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors"
}
export declare enum GetPageItemDetailSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}
export declare enum GetPageTextEntryFormatEnum {
    Markdown = "markdown",
    Html = "html"
}
export declare class GetPageQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemDetailExpand?: GetPageItemDetailExpandEnum;
    itemDetailSelectSeason?: GetPageItemDetailSelectSeasonEnum;
    lang?: string;
    listPageSize?: number;
    listPageSizeLarge?: number;
    maxListPrefetch?: number;
    maxRating?: string;
    path: string;
    segments?: string[];
    sub?: string;
    textEntryFormat?: GetPageTextEntryFormatEnum;
}
export declare class GetPageRequest extends SpeakeasyBase {
    queryParams: GetPageQueryParams;
}
export declare class GetPageResponse extends SpeakeasyBase {
    contentType: string;
    page?: shared.Page;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
