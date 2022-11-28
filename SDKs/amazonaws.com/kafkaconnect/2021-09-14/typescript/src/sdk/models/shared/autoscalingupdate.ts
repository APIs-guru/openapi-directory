import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScaleInPolicyUpdate } from "./scaleinpolicyupdate";
import { ScaleOutPolicyUpdate } from "./scaleoutpolicyupdate";



// AutoScalingUpdate
/** 
 * The updates to the auto scaling parameters for the connector.
**/
export class AutoScalingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount: number;

  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @SpeakeasyMetadata({ data: "json, name=minWorkerCount" })
  minWorkerCount: number;

  @SpeakeasyMetadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy: ScaleInPolicyUpdate;

  @SpeakeasyMetadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy: ScaleOutPolicyUpdate;
}
