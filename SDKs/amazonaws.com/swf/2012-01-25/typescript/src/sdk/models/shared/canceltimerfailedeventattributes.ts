import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelTimerFailedCauseEnum } from "./canceltimerfailedcauseenum";



// CancelTimerFailedEventAttributes
/** 
 * Provides the details of the <code>CancelTimerFailed</code> event.
**/
export class CancelTimerFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: CancelTimerFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timerId" })
  timerId: string;
}
