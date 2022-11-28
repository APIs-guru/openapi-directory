import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleInPolicy
/** 
 * The scale-in policy for the connector.
**/
export class ScaleInPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
