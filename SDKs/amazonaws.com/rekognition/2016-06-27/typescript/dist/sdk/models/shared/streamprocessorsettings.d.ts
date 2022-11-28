import { SpeakeasyBase } from "../../../internal/utils";
import { FaceSearchSettings } from "./facesearchsettings";
/**
 * Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
**/
export declare class StreamProcessorSettings extends SpeakeasyBase {
    faceSearch?: FaceSearchSettings;
}
