import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterConstraints
/** 
 * The constraints that the administrator has put on the parameter.
**/
export class ParameterConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=AllowedValues" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConstraintDescription" })
  constraintDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxLength" })
  maxLength?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=MinLength" })
  minLength?: string;

  @SpeakeasyMetadata({ data: "json, name=MinValue" })
  minValue?: string;
}
