import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CancelTimerFailedCauseEnum } from "./canceltimerfailedcauseenum";


// CancelTimerFailedEventAttributes
/** 
 * Provides the details of the <code>CancelTimerFailed</code> event.
**/
export class CancelTimerFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: CancelTimerFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=timerId" })
  timerId: string;
}
