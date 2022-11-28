import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemFilter } from "./opsitemfilter";
export declare class DescribeOpsItemsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    opsItemFilters?: OpsItemFilter[];
}
