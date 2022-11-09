import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimerFiredEventAttributes
/** 
 * Provides the details of the <code>TimerFired</code> event.
**/
export class TimerFiredEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timerId" })
  timerId: string;
}
