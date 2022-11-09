import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScaleInPolicyUpdate } from "./scaleinpolicyupdate";
import { ScaleOutPolicyUpdate } from "./scaleoutpolicyupdate";


// AutoScalingUpdate
/** 
 * The updates to the auto scaling parameters for the connector.
**/
export class AutoScalingUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxWorkerCount" })
  maxWorkerCount: number;

  @Metadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @Metadata({ data: "json, name=minWorkerCount" })
  minWorkerCount: number;

  @Metadata({ data: "json, name=scaleInPolicy" })
  scaleInPolicy: ScaleInPolicyUpdate;

  @Metadata({ data: "json, name=scaleOutPolicy" })
  scaleOutPolicy: ScaleOutPolicyUpdate;
}
