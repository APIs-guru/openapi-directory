import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BotLocaleHistoryEvent
/** 
 * Provides information about an event that occurred affecting the bot locale.
**/
export class BotLocaleHistoryEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=eventDate" })
  eventDate: Date;
}
