import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BotAliasHistoryEvent
/** 
 * Provides a record of an event that affects a bot alias. For example, when the version of a bot that the alias points to changes.
**/
export class BotAliasHistoryEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
