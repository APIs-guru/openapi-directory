import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagFilter } from "./tagfilter";


export class GetResourcesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludeCompliantResources" })
  excludeCompliantResources?: boolean;

  @Metadata({ data: "json, name=IncludeComplianceDetails" })
  includeComplianceDetails?: boolean;

  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=ResourceARNList" })
  resourceArnList?: string[];

  @Metadata({ data: "json, name=ResourceTypeFilters" })
  resourceTypeFilters?: string[];

  @Metadata({ data: "json, name=ResourcesPerPage" })
  resourcesPerPage?: number;

  @Metadata({ data: "json, name=TagFilters", elemType: shared.TagFilter })
  tagFilters?: TagFilter[];

  @Metadata({ data: "json, name=TagsPerPage" })
  tagsPerPage?: number;
}
