import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleFilterNameEnum } from "./botlocalefilternameenum";
import { BotLocaleFilterOperatorEnum } from "./botlocalefilteroperatorenum";
/**
 * Filters responses returned by the <code>ListBotLocales</code> operation.
**/
export declare class BotLocaleFilter extends SpeakeasyBase {
    name: BotLocaleFilterNameEnum;
    operator: BotLocaleFilterOperatorEnum;
    values: string[];
}
