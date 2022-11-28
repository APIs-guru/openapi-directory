import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationCoverage } from "./paginationcoverage";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";
export declare class ConnectorResource extends SpeakeasyBase {
    customFieldsSupported?: boolean;
    downstreamId?: string;
    downstreamName?: string;
    downstreamUnsupportedOperations?: string[];
    id?: string;
    name?: string;
    pagination?: PaginationCoverage;
    paginationSupported?: boolean;
    status?: ResourceStatusEnum;
    supportedFields?: SupportedProperty[];
    supportedFilters?: string[];
    supportedListFields?: SupportedProperty[];
    supportedOperations?: string[];
    supportedSortBy?: string[];
}
