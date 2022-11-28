import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserDetails } from "./userdetails";



// ServiceMetadata
/** 
 * A container object for the session details associated with a workflow.
**/
export class ServiceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserDetails" })
  userDetails: UserDetails;
}
