import { SpeakeasyBase } from "../../../internal/utils";
import { IntentFilterNameEnum } from "./intentfilternameenum";
import { IntentFilterOperatorEnum } from "./intentfilteroperatorenum";
/**
 * Filters the response from the <code>ListIntents</code> operation.
**/
export declare class IntentFilter extends SpeakeasyBase {
    name: IntentFilterNameEnum;
    operator: IntentFilterOperatorEnum;
    values: string[];
}
