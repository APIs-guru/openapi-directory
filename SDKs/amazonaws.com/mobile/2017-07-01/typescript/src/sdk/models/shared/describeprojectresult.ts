import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectDetails } from "./projectdetails";



// DescribeProjectResult
/** 
 *  Result structure used for requests of project details. 
**/
export class DescribeProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
