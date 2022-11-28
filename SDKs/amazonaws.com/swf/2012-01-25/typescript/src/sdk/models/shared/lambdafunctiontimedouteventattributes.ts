import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionTimeoutTypeEnum } from "./lambdafunctiontimeouttypeenum";



// LambdaFunctionTimedOutEventAttributes
/** 
 * Provides details of the <code>LambdaFunctionTimedOut</code> event.
**/
export class LambdaFunctionTimedOutEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutType" })
  timeoutType?: LambdaFunctionTimeoutTypeEnum;
}
