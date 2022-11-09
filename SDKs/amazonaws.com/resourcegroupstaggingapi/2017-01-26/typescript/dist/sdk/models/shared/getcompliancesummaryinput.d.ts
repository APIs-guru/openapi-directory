import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupByAttributeEnum } from "./groupbyattributeenum";
export declare class GetComplianceSummaryInput extends SpeakeasyBase {
    groupBy?: GroupByAttributeEnum[];
    maxResults?: number;
    paginationToken?: string;
    regionFilters?: string[];
    resourceTypeFilters?: string[];
    tagKeyFilters?: string[];
    targetIdFilters?: string[];
}
