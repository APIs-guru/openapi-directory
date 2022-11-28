import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScaleInPolicyDescription } from "./scaleinpolicydescription";
import { ScaleOutPolicyDescription } from "./scaleoutpolicydescription";



// AutoScalingDescription
/** 
 * Information about the auto scaling parameters for the connector.
**/
export class AutoScalingDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minWorkerCount" })
  minWorkerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy?: ScaleInPolicyDescription;

  @SpeakeasyMetadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy?: ScaleOutPolicyDescription;
}
