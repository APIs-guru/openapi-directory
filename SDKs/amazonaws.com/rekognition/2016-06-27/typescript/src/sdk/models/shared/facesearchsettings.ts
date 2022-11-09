import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FaceSearchSettings
/** 
 * Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
**/
export class FaceSearchSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;
}
