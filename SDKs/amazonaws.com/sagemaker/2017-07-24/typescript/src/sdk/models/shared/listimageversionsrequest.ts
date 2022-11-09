import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageVersionSortByEnum } from "./imageversionsortbyenum";
import { ImageVersionSortOrderEnum } from "./imageversionsortorderenum";


export class ListImageVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=ImageName" })
  imageName: string;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ImageVersionSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: ImageVersionSortOrderEnum;
}
