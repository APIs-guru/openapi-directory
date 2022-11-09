import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TagFilter } from "./tagfilter";
export declare class GetResourcesInput extends SpeakeasyBase {
    excludeCompliantResources?: boolean;
    includeComplianceDetails?: boolean;
    paginationToken?: string;
    resourceArnList?: string[];
    resourceTypeFilters?: string[];
    resourcesPerPage?: number;
    tagFilters?: TagFilter[];
    tagsPerPage?: number;
}
