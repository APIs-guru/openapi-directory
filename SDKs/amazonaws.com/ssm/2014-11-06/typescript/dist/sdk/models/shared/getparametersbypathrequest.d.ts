import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterStringFilter } from "./parameterstringfilter";
export declare class GetParametersByPathRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    parameterFilters?: ParameterStringFilter[];
    path: string;
    recursive?: boolean;
    withDecryption?: boolean;
}
