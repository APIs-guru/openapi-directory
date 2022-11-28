import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FaceSearchSettings
/** 
 * Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
**/
export class FaceSearchSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;
}
