import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplyMethodEnum } from "./applymethodenum";



// Parameter
/** 
 * <p> This data type is used as a request parameter in the <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions. </p> <p>This data type is used as a response element in the <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  applyMethod?: ApplyMethodEnum;

  @SpeakeasyMetadata()
  applyType?: string;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;

  @SpeakeasyMetadata()
  parameterName?: string;

  @SpeakeasyMetadata()
  parameterValue?: string;

  @SpeakeasyMetadata()
  source?: string;

  @SpeakeasyMetadata()
  supportedEngineModes?: string[];
}
