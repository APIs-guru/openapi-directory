import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceSearchSettings } from "./facesearchsettings";



// StreamProcessorSettings
/** 
 * Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
**/
export class StreamProcessorSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceSearch" })
  faceSearch?: FaceSearchSettings;
}
