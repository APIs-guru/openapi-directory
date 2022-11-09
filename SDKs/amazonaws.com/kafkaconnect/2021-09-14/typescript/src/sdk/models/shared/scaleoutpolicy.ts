import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleOutPolicy
/** 
 * The scale-out policy for the connector.
**/
export class ScaleOutPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
