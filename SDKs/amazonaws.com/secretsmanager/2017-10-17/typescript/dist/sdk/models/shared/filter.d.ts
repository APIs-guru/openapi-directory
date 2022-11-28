import { SpeakeasyBase } from "../../../internal/utils";
import { FilterNameStringTypeEnum } from "./filternamestringtypeenum";
/**
 * Allows you to add filters when you use the search function in Secrets Manager.
**/
export declare class Filter extends SpeakeasyBase {
    key?: FilterNameStringTypeEnum;
    values?: string[];
}
