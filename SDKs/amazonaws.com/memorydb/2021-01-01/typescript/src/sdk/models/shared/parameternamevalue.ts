import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterNameValue
/** 
 * Describes a name-value pair that is used to update the value of a parameter.
**/
export class ParameterNameValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterName" })
  parameterName?: string;

  @Metadata({ data: "json, name=ParameterValue" })
  parameterValue?: string;
}
