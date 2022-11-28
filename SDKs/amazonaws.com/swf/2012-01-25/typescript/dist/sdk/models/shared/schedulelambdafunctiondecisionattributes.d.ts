import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>.
**/
export declare class ScheduleLambdaFunctionDecisionAttributes extends SpeakeasyBase {
    control?: string;
    id: string;
    input?: string;
    name: string;
    startToCloseTimeout?: string;
}
