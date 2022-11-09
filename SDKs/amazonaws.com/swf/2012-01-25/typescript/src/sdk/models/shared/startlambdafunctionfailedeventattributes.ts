import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartLambdaFunctionFailedCauseEnum } from "./startlambdafunctionfailedcauseenum";


// StartLambdaFunctionFailedEventAttributes
/** 
 * Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export class StartLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: StartLambdaFunctionFailedCauseEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId?: number;
}
