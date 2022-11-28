import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionCompletedEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
**/
export class LambdaFunctionCompletedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}
