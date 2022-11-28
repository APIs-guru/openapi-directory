import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workload } from "./workload";



// UpdateWorkloadOutput
/** 
 * Output of an update workload call.
**/
export class UpdateWorkloadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workload" })
  workload?: Workload;
}
