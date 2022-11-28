import { SpeakeasyBase } from "../../../internal/utils";
import { BotFilterNameEnum } from "./botfilternameenum";
import { BotFilterOperatorEnum } from "./botfilteroperatorenum";
/**
 * Filters the responses returned by the <code>ListBots</code> operation.
**/
export declare class BotFilter extends SpeakeasyBase {
    name: BotFilterNameEnum;
    operator: BotFilterOperatorEnum;
    values: string[];
}
