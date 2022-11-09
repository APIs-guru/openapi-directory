import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BotLocaleHistoryEvent
/** 
 * Provides information about an event that occurred affecting the bot locale.
**/
export class BotLocaleHistoryEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: string;

  @Metadata({ data: "json, name=eventDate" })
  eventDate: Date;
}
