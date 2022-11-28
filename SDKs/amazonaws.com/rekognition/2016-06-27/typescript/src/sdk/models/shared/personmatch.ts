import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";
import { PersonDetail } from "./persondetail";



// PersonMatch
/** 
 * Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. 
**/
export class PersonMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceMatches", elemType: FaceMatch })
  faceMatches?: FaceMatch[];

  @SpeakeasyMetadata({ data: "json, name=Person" })
  person?: PersonDetail;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
