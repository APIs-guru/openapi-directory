import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleInPolicyUpdate
/** 
 * An update to the connector's scale-in policy.
**/
export class ScaleInPolicyUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
