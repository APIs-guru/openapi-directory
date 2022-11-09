import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSortByEnum } from "./projectsortbyenum";
import { ProjectSortOrderEnum } from "./projectsortorderenum";


export class ListProjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ProjectSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: ProjectSortOrderEnum;
}
