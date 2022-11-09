import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionScheduledEventAttributes
/** 
 * Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.
**/
export class LambdaFunctionScheduledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;
}
