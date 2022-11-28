import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectDetails } from "./projectdetails";



// CreateProjectResult
/** 
 *  Result structure used in response to a request to create a project. 
**/
export class CreateProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ProjectDetails;
}
