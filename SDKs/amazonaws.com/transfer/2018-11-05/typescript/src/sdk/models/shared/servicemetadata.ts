import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserDetails } from "./userdetails";


// ServiceMetadata
/** 
 * A container object for the session details associated with a workflow.
**/
export class ServiceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserDetails" })
  userDetails: UserDetails;
}
