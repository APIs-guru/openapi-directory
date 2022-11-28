import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleOutPolicyDescription
/** 
 * The description of the scale-out policy for the connector.
**/
export class ScaleOutPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage?: number;
}
