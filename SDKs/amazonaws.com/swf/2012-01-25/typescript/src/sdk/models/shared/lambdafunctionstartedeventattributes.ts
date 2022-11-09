import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionStartedEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
**/
export class LambdaFunctionStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;
}
