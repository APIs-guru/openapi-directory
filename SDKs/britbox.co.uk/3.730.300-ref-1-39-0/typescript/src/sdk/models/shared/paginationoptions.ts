import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaginationOptionsItemTypeEnum {
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

export enum PaginationOptionsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum PaginationOptionsOrderByEnum {
    AZ = "a-z",
    ReleaseYear = "release-year",
    DateAdded = "date-added"
}


export class PaginationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemType" })
  itemType?: PaginationOptionsItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxRating" })
  maxRating?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: PaginationOptionsOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: PaginationOptionsOrderByEnum;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;
}
