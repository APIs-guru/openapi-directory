import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectDetails } from "./projectdetails";



// UpdateProjectResult
/** 
 *  Result structure used for requests to updated project configuration. 
**/
export class UpdateProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
