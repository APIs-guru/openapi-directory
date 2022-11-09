import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionFailedEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export class LambdaFunctionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;
}
