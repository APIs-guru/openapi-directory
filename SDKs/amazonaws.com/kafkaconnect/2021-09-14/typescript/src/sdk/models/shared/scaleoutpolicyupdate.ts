import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleOutPolicyUpdate
/** 
 * An update to the connector's scale-out policy.
**/
export class ScaleOutPolicyUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
