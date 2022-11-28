import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupByAttributeEnum } from "./groupbyattributeenum";



export class GetComplianceSummaryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupBy" })
  groupBy?: GroupByAttributeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegionFilters" })
  regionFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTypeFilters" })
  resourceTypeFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=TagKeyFilters" })
  tagKeyFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=TargetIdFilters" })
  targetIdFilters?: string[];
}
