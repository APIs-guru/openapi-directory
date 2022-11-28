import { SpeakeasyBase } from "../../../internal/utils";
import { DescribeActivationsFilterKeysEnum } from "./describeactivationsfilterkeysenum";
/**
 * Filter for the DescribeActivation API.
**/
export declare class DescribeActivationsFilter extends SpeakeasyBase {
    filterKey?: DescribeActivationsFilterKeysEnum;
    filterValues?: string[];
}
