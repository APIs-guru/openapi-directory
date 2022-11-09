import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputFileLocation } from "./inputfilelocation";
import { OverwriteExistingEnum } from "./overwriteexistingenum";


// CopyStepDetails
/** 
 * Each step type has its own <code>StepDetails</code> structure.
**/
export class CopyStepDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationFileLocation" })
  destinationFileLocation?: InputFileLocation;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OverwriteExisting" })
  overwriteExisting?: OverwriteExistingEnum;
}
