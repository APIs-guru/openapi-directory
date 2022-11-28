import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionStartedEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
**/
export class LambdaFunctionStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}
