import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageSortByEnum } from "./imagesortbyenum";
import { ImageSortOrderEnum } from "./imagesortorderenum";


export class ListImagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ImageSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: ImageSortOrderEnum;
}
