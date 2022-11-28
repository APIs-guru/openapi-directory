import { SpeakeasyBase } from "../../../internal/utils";
import { ContactListDestination } from "./contactlistdestination";
import { SuppressionListDestination } from "./suppressionlistdestination";
/**
 * An object that contains details about the resource destination the import job is going to target.
**/
export declare class ImportDestination extends SpeakeasyBase {
    contactListDestination?: ContactListDestination;
    suppressionListDestination?: SuppressionListDestination;
}
