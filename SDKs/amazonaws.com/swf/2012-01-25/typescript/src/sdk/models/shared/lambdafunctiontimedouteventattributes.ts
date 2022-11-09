import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaFunctionTimeoutTypeEnum } from "./lambdafunctiontimeouttypeenum";


// LambdaFunctionTimedOutEventAttributes
/** 
 * Provides details of the <code>LambdaFunctionTimedOut</code> event.
**/
export class LambdaFunctionTimedOutEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timeoutType" })
  timeoutType?: LambdaFunctionTimeoutTypeEnum;
}
