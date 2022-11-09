import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstBootEnum } from "./firstbootenum";


// LaunchedInstance
/** 
 * Configure launced instance.
**/
export class LaunchedInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ec2InstanceID" })
  ec2InstanceId?: string;

  @Metadata({ data: "json, name=firstBoot" })
  firstBoot?: FirstBootEnum;

  @Metadata({ data: "json, name=jobID" })
  jobId?: string;
}
