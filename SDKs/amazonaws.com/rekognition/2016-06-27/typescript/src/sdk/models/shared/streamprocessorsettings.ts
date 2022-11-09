import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FaceSearchSettings } from "./facesearchsettings";


// StreamProcessorSettings
/** 
 * Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
**/
export class StreamProcessorSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceSearch" })
  faceSearch?: FaceSearchSettings;
}
