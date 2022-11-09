import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuppressedDestination } from "./suppresseddestination";


// GetSuppressedDestinationResponse
/** 
 * Information about the suppressed email address.
**/
export class GetSuppressedDestinationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuppressedDestination" })
  suppressedDestination: SuppressedDestination;
}
