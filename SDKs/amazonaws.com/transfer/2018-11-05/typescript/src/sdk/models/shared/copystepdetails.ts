import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputFileLocation } from "./inputfilelocation";
import { OverwriteExistingEnum } from "./overwriteexistingenum";



// CopyStepDetails
/** 
 * Each step type has its own <code>StepDetails</code> structure.
**/
export class CopyStepDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationFileLocation" })
  destinationFileLocation?: InputFileLocation;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OverwriteExisting" })
  overwriteExisting?: OverwriteExistingEnum;
}
