import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaleInPolicyDescription } from "./scaleinpolicydescription";
import { ScaleOutPolicyDescription } from "./scaleoutpolicydescription";


// AutoScalingDescription
/** 
 * Information about the auto scaling parameters for the connector.
**/
export class AutoScalingDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount?: number;

  @Metadata({ data: "json, name=mcuCount" })
  mcuCount?: number;

  @Metadata({ data: "json, name=minWorkerCount" })
  minWorkerCount?: number;

  @Metadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy?: ScaleInPolicyDescription;

  @Metadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy?: ScaleOutPolicyDescription;
}
