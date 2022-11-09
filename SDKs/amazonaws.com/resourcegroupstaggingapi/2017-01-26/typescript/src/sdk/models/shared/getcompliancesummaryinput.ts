import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupByAttributeEnum } from "./groupbyattributeenum";


export class GetComplianceSummaryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupBy" })
  groupBy?: GroupByAttributeEnum[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=RegionFilters" })
  regionFilters?: string[];

  @Metadata({ data: "json, name=ResourceTypeFilters" })
  resourceTypeFilters?: string[];

  @Metadata({ data: "json, name=TagKeyFilters" })
  tagKeyFilters?: string[];

  @Metadata({ data: "json, name=TargetIdFilters" })
  targetIdFilters?: string[];
}
