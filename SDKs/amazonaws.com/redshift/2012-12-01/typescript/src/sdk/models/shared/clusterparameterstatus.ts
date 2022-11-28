import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterParameterStatus
/** 
 * Describes the status of a parameter group.
**/
export class ClusterParameterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  parameterApplyErrorDescription?: string;

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;

  @SpeakeasyMetadata()
  parameterName?: string;
}
