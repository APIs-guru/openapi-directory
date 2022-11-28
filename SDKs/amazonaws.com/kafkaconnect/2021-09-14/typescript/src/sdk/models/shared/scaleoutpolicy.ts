import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleOutPolicy
/** 
 * The scale-out policy for the connector.
**/
export class ScaleOutPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
