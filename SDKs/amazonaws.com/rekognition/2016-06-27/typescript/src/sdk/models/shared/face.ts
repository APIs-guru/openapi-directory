import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";



// Face
/** 
 * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
**/
export class Face extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=ExternalImageId" })
  externalImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=FaceId" })
  faceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;
}
