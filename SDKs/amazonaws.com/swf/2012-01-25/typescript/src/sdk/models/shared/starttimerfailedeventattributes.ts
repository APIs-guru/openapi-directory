import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartTimerFailedCauseEnum } from "./starttimerfailedcauseenum";


// StartTimerFailedEventAttributes
/** 
 * Provides the details of the <code>StartTimerFailed</code> event.
**/
export class StartTimerFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: StartTimerFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=timerId" })
  timerId: string;
}
