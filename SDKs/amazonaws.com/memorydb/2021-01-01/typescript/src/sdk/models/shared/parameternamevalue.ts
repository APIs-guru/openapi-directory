import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterNameValue
/** 
 * Describes a name-value pair that is used to update the value of a parameter.
**/
export class ParameterNameValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;
}
