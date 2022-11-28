import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactListDestination } from "./contactlistdestination";
import { SuppressionListDestination } from "./suppressionlistdestination";



// ImportDestination
/** 
 * An object that contains details about the resource destination the import job is going to target.
**/
export class ImportDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactListDestination" })
  contactListDestination?: ContactListDestination;

  @SpeakeasyMetadata({ data: "json, name=SuppressionListDestination" })
  suppressionListDestination?: SuppressionListDestination;
}
