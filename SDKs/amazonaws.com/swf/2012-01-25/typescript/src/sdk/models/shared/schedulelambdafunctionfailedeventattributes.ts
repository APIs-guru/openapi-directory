import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleLambdaFunctionFailedCauseEnum } from "./schedulelambdafunctionfailedcauseenum";



// ScheduleLambdaFunctionFailedEventAttributes
/** 
 * Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export class ScheduleLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: ScheduleLambdaFunctionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
