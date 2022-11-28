import { SpeakeasyBase } from "../../../internal/utils";
import { MapFilterComparisonEnum } from "./mapfiltercomparisonenum";
/**
 * A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
**/
export declare class MapFilter extends SpeakeasyBase {
    comparison?: MapFilterComparisonEnum;
    key?: string;
    value?: string;
}
