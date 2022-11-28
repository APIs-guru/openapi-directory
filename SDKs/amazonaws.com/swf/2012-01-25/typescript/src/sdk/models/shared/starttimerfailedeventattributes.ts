import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartTimerFailedCauseEnum } from "./starttimerfailedcauseenum";



// StartTimerFailedEventAttributes
/** 
 * Provides the details of the <code>StartTimerFailed</code> event.
**/
export class StartTimerFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: StartTimerFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timerId" })
  timerId: string;
}
