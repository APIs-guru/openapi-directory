import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileLocation } from "./inputfilelocation";
import { OverwriteExistingEnum } from "./overwriteexistingenum";
/**
 * Each step type has its own <code>StepDetails</code> structure.
**/
export declare class CopyStepDetails extends SpeakeasyBase {
    destinationFileLocation?: InputFileLocation;
    name?: string;
    overwriteExisting?: OverwriteExistingEnum;
}
