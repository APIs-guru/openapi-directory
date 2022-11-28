import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersFilter } from "./parametersfilter";
import { ParameterStringFilter } from "./parameterstringfilter";
export declare class DescribeParametersRequest extends SpeakeasyBase {
    filters?: ParametersFilter[];
    maxResults?: number;
    nextToken?: string;
    parameterFilters?: ParameterStringFilter[];
}
