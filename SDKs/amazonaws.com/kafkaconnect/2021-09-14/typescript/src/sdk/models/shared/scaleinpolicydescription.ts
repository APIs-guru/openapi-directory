import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleInPolicyDescription
/** 
 * The description of the scale-in policy for the connector.
**/
export class ScaleInPolicyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage?: number;
}
