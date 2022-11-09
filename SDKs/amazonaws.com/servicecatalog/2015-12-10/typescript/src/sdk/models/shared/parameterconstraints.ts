import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterConstraints
/** 
 * The constraints that the administrator has put on the parameter.
**/
export class ParameterConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedPattern" })
  allowedPattern?: string;

  @Metadata({ data: "json, name=AllowedValues" })
  allowedValues?: string[];

  @Metadata({ data: "json, name=ConstraintDescription" })
  constraintDescription?: string;

  @Metadata({ data: "json, name=MaxLength" })
  maxLength?: string;

  @Metadata({ data: "json, name=MaxValue" })
  maxValue?: string;

  @Metadata({ data: "json, name=MinLength" })
  minLength?: string;

  @Metadata({ data: "json, name=MinValue" })
  minValue?: string;
}
