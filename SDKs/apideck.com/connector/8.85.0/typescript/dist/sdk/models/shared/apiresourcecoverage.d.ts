import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationCoverage } from "./paginationcoverage";
import { SupportedProperty } from "./supportedproperty";
import { ResourceStatusEnum } from "./resourcestatusenum";
export declare class ApiResourceCoverageCoverage extends SpeakeasyBase {
    downstreamId?: string;
    downstreamName?: string;
    pagination?: PaginationCoverage;
    paginationSupported?: boolean;
    supportedFields?: SupportedProperty[];
    supportedFilters?: string[];
    supportedListFields?: SupportedProperty[];
    supportedOperations?: string[];
    supportedSortBy?: string[];
}
export declare class ApiResourceCoverage extends SpeakeasyBase {
    coverage?: ApiResourceCoverageCoverage[];
    id?: string;
    name?: string;
    status?: ResourceStatusEnum;
}
