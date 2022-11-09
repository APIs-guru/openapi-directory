import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workload } from "./workload";


// UpdateWorkloadOutput
/** 
 * Output of an update workload call.
**/
export class UpdateWorkloadOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workload" })
  workload?: Workload;
}
