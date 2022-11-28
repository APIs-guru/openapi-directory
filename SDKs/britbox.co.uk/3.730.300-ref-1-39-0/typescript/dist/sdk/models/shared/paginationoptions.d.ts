import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaginationOptionsItemTypeEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
export declare enum PaginationOptionsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum PaginationOptionsOrderByEnum {
    AZ = "a-z",
    ReleaseYear = "release-year",
    DateAdded = "date-added"
}
export declare class PaginationOptions extends SpeakeasyBase {
    completed?: boolean;
    itemType?: PaginationOptionsItemTypeEnum;
    maxRating?: string;
    order?: PaginationOptionsOrderEnum;
    orderBy?: PaginationOptionsOrderByEnum;
    pageSize?: number;
}
