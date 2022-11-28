import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterApplyTypeEnum } from "./parameterapplytypeenum";



// Parameter
/** 
 * Describes a parameter in a cluster parameter group.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  applyType?: ParameterApplyTypeEnum;

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
}
