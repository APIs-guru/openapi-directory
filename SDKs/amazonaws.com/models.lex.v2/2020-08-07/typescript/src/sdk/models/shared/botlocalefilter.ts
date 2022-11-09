import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotLocaleFilterNameEnum } from "./botlocalefilternameenum";
import { BotLocaleFilterOperatorEnum } from "./botlocalefilteroperatorenum";


// BotLocaleFilter
/** 
 * Filters responses returned by the <code>ListBotLocales</code> operation.
**/
export class BotLocaleFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: BotLocaleFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: BotLocaleFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
