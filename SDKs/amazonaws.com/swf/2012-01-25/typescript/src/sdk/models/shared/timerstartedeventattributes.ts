import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimerStartedEventAttributes
/** 
 * Provides the details of the <code>TimerStarted</code> event.
**/
export class TimerStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=startToFireTimeout" })
  startToFireTimeout: string;

  @Metadata({ data: "json, name=timerId" })
  timerId: string;
}
