import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactListDestination } from "./contactlistdestination";
import { SuppressionListDestination } from "./suppressionlistdestination";


// ImportDestination
/** 
 * An object that contains details about the resource destination the import job is going to target.
**/
export class ImportDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListDestination" })
  contactListDestination?: ContactListDestination;

  @Metadata({ data: "json, name=SuppressionListDestination" })
  suppressionListDestination?: SuppressionListDestination;
}
