import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstBootEnum } from "./firstbootenum";



// LaunchedInstance
/** 
 * Configure launced instance.
**/
export class LaunchedInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ec2InstanceID" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstBoot" })
  firstBoot?: FirstBootEnum;

  @SpeakeasyMetadata({ data: "json, name=jobID" })
  jobId?: string;
}
