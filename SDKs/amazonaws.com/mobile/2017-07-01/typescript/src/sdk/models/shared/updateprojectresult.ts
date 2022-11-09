import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectDetails } from "./projectdetails";


// UpdateProjectResult
/** 
 *  Result structure used for requests to updated project configuration. 
**/
export class UpdateProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
