import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleInPolicyUpdate
/** 
 * An update to the connector's scale-in policy.
**/
export class ScaleInPolicyUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
