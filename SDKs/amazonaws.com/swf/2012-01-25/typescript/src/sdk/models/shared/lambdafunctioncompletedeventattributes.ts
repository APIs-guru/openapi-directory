import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionCompletedEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
**/
export class LambdaFunctionCompletedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}
