import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BotFilterNameEnum } from "./botfilternameenum";
import { BotFilterOperatorEnum } from "./botfilteroperatorenum";



// BotFilter
/** 
 * Filters the responses returned by the <code>ListBots</code> operation.
**/
export class BotFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: BotFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: BotFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
