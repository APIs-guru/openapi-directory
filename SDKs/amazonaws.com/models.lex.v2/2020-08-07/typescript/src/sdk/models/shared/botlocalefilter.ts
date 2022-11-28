import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleFilterNameEnum } from "./botlocalefilternameenum";
import { BotLocaleFilterOperatorEnum } from "./botlocalefilteroperatorenum";



// BotLocaleFilter
/** 
 * Filters responses returned by the <code>ListBotLocales</code> operation.
**/
export class BotLocaleFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: BotLocaleFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: BotLocaleFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
