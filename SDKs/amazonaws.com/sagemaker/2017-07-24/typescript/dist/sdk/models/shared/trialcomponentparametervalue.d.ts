import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
**/
export declare class TrialComponentParameterValue extends SpeakeasyBase {
    numberValue?: number;
    stringValue?: string;
}
