import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduleLambdaFunctionDecisionAttributes
/** 
 * Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
**/
export class ScheduleLambdaFunctionDecisionAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;
}
