import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrialComponentParameterValue
/** 
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
**/
export class TrialComponentParameterValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NumberValue" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
