import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrialComponentParameterValue
/** 
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
**/
export class TrialComponentParameterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumberValue" })
  numberValue?: number;

  @Metadata({ data: "json, name=StringValue" })
  stringValue?: string;
}
