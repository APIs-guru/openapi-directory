import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workload } from "./workload";


// GetWorkloadOutput
/** 
 * Output of a get workload call.
**/
export class GetWorkloadOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Workload" })
  workload?: Workload;
}
