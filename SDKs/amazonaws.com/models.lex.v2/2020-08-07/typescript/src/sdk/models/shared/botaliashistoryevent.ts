import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BotAliasHistoryEvent
/** 
 * Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.
**/
export class BotAliasHistoryEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
