import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectDetails } from "./projectdetails";


// DescribeProjectResult
/** 
 *  Result structure used for requests of project details. 
**/
export class DescribeProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
