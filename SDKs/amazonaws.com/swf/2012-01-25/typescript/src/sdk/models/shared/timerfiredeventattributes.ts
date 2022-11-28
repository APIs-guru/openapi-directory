import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimerFiredEventAttributes
/** 
 * Provides the details of the <code>TimerFired</code> event.
**/
export class TimerFiredEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timerId" })
  timerId: string;
}
