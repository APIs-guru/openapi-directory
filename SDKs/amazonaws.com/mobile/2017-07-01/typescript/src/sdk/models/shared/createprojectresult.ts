import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectDetails } from "./projectdetails";


// CreateProjectResult
/** 
 *  Result structure used in response to a request to create a project. 
**/
export class CreateProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
