import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimerCanceledEventAttributes
/** 
 *  Provides the details of the <code>TimerCanceled</code> event. 
**/
export class TimerCanceledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timerId" })
  timerId: string;
}
