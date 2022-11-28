import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimerCanceledEventAttributes
/** 
 *  Provides the details of the <code>TimerCanceled</code> event. 
**/
export class TimerCanceledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timerId" })
  timerId: string;
}
