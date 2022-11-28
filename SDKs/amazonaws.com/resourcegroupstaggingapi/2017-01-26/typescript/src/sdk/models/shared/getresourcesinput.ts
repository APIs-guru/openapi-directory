import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagFilter } from "./tagfilter";



export class GetResourcesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludeCompliantResources" })
  excludeCompliantResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeComplianceDetails" })
  includeComplianceDetails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARNList" })
  resourceArnList?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTypeFilters" })
  resourceTypeFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourcesPerPage" })
  resourcesPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=TagFilters", elemType: TagFilter })
  tagFilters?: TagFilter[];

  @SpeakeasyMetadata({ data: "json, name=TagsPerPage" })
  tagsPerPage?: number;
}
