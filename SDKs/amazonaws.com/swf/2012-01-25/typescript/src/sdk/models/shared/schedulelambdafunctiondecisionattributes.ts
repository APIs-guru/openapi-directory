import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleLambdaFunctionDecisionAttributes
/** 
 * Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
**/
export class ScheduleLambdaFunctionDecisionAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=startToCloseTimeout" })
  startToCloseTimeout?: string;
}
