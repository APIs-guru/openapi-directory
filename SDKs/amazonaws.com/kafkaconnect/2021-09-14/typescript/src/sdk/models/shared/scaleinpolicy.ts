import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleInPolicy
/** 
 * The scale-in policy for the connector.
**/
export class ScaleInPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUtilizationPercentage" })
  cpuUtilizationPercentage: number;
}
