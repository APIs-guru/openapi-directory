import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BotFilterNameEnum } from "./botfilternameenum";
import { BotFilterOperatorEnum } from "./botfilteroperatorenum";


// BotFilter
/** 
 * Filters the responses returned by the <code>ListBots</code> operation.
**/
export class BotFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: BotFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: BotFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
