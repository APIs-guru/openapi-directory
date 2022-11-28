import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressedDestination } from "./suppresseddestination";



// GetSuppressedDestinationResponse
/** 
 * Information about the suppressed email address.
**/
export class GetSuppressedDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuppressedDestination" })
  suppressedDestination: SuppressedDestination;
}
