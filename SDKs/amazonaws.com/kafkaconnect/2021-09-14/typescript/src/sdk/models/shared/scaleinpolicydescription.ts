import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleInPolicyDescription
/** 
 * The description of the scale-in policy for the connector.
**/
export class ScaleInPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage?: number;
}
