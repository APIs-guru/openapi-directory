import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.
**/
export declare class FaceSearchSettings extends SpeakeasyBase {
    collectionId?: string;
    faceMatchThreshold?: number;
}
