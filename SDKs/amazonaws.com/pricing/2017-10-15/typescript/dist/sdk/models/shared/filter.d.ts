import { SpeakeasyBase } from "../../../internal/utils";
import { FilterTypeEnum } from "./filtertypeenum";
/**
 * The constraints that you want all returned products to match.
**/
export declare class Filter extends SpeakeasyBase {
    field: string;
    type: FilterTypeEnum;
    value: string;
}
