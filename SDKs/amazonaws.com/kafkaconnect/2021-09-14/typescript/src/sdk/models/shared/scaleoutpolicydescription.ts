import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleOutPolicyDescription
/** 
 * The description of the scale-out policy for the connector.
**/
export class ScaleOutPolicyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage?: number;
}
