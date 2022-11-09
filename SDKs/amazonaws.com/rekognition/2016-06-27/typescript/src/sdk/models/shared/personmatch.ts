import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceMatch } from "./facematch";
import { PersonDetail } from "./persondetail";


// PersonMatch
/** 
 * Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. 
**/
export class PersonMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceMatches", elemType: shared.FaceMatch })
  faceMatches?: FaceMatch[];

  @Metadata({ data: "json, name=Person" })
  person?: PersonDetail;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: number;
}
