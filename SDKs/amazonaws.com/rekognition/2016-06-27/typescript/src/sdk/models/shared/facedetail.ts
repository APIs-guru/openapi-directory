import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgeRange } from "./agerange";
import { Beard } from "./beard";
import { BoundingBox } from "./boundingbox";
import { Emotion } from "./emotion";
import { Eyeglasses } from "./eyeglasses";
import { EyeOpen } from "./eyeopen";
import { Gender } from "./gender";
import { Landmark } from "./landmark";
import { MouthOpen } from "./mouthopen";
import { Mustache } from "./mustache";
import { Pose } from "./pose";
import { ImageQuality } from "./imagequality";
import { Smile } from "./smile";
import { Sunglasses } from "./sunglasses";


// FaceDetail
/** 
 * <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
**/
export class FaceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgeRange" })
  ageRange?: AgeRange;

  @Metadata({ data: "json, name=Beard" })
  beard?: Beard;

  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Emotions", elemType: shared.Emotion })
  emotions?: Emotion[];

  @Metadata({ data: "json, name=Eyeglasses" })
  eyeglasses?: Eyeglasses;

  @Metadata({ data: "json, name=EyesOpen" })
  eyesOpen?: EyeOpen;

  @Metadata({ data: "json, name=Gender" })
  gender?: Gender;

  @Metadata({ data: "json, name=Landmarks", elemType: shared.Landmark })
  landmarks?: Landmark[];

  @Metadata({ data: "json, name=MouthOpen" })
  mouthOpen?: MouthOpen;

  @Metadata({ data: "json, name=Mustache" })
  mustache?: Mustache;

  @Metadata({ data: "json, name=Pose" })
  pose?: Pose;

  @Metadata({ data: "json, name=Quality" })
  quality?: ImageQuality;

  @Metadata({ data: "json, name=Smile" })
  smile?: Smile;

  @Metadata({ data: "json, name=Sunglasses" })
  sunglasses?: Sunglasses;
}
