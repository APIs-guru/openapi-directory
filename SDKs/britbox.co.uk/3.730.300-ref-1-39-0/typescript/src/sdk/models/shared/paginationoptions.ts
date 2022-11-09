import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaginationOptionsItemTypeEnum {
    Movie = "movie"
,    Show = "show"
,    Season = "season"
,    Episode = "episode"
,    Program = "program"
,    Link = "link"
,    Trailer = "trailer"
,    Channel = "channel"
,    CustomAsset = "customAsset"
}

export enum PaginationOptionsOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum PaginationOptionsOrderByEnum {
    AZ = "a-z"
,    ReleaseYear = "release-year"
,    DateAdded = "date-added"
}


export class PaginationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed" })
  completed?: boolean;

  @Metadata({ data: "json, name=itemType" })
  itemType?: PaginationOptionsItemTypeEnum;

  @Metadata({ data: "json, name=maxRating" })
  maxRating?: string;

  @Metadata({ data: "json, name=order" })
  order?: PaginationOptionsOrderEnum;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: PaginationOptionsOrderByEnum;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;
}
