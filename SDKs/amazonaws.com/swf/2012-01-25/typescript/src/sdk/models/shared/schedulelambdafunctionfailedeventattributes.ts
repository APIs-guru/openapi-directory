import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduleLambdaFunctionFailedCauseEnum } from "./schedulelambdafunctionfailedcauseenum";


// ScheduleLambdaFunctionFailedEventAttributes
/** 
 * Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export class ScheduleLambdaFunctionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: ScheduleLambdaFunctionFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
