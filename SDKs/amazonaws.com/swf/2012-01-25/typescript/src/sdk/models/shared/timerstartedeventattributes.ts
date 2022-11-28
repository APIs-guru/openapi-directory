import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimerStartedEventAttributes
/** 
 * Provides the details of the <code>TimerStarted</code> event.
**/
export class TimerStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startToFireTimeout" })
  startToFireTimeout: string;

  @SpeakeasyMetadata({ data: "json, name=timerId" })
  timerId: string;
}
