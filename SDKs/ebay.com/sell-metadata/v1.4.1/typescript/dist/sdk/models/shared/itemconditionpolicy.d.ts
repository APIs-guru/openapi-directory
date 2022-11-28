import { SpeakeasyBase } from "../../../internal/utils";
import { ItemCondition } from "./itemcondition";
export declare class ItemConditionPolicy extends SpeakeasyBase {
    categoryId?: string;
    categoryTreeId?: string;
    itemConditionRequired?: boolean;
    itemConditions?: ItemCondition[];
}
