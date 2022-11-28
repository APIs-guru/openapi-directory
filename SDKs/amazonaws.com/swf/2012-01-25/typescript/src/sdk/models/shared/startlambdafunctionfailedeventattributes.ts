import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartLambdaFunctionFailedCauseEnum } from "./startlambdafunctionfailedcauseenum";



// StartLambdaFunctionFailedEventAttributes
/** 
 * Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export class StartLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: StartLambdaFunctionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId?: number;
}
