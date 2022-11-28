import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleOutPolicyUpdate
/** 
 * An update to the connector's scale-out policy.
**/
export class ScaleOutPolicyUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
