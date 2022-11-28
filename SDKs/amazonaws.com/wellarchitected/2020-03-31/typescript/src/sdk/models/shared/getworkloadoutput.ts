import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workload } from "./workload";



// GetWorkloadOutput
/** 
 * Output of a get workload call.
**/
export class GetWorkloadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Workload" })
  workload?: Workload;
}
