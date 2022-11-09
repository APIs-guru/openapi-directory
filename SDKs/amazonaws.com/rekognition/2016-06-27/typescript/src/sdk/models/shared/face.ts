import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


// Face
/** 
 * Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
**/
export class Face extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=ExternalImageId" })
  externalImageId?: string;

  @Metadata({ data: "json, name=FaceId" })
  faceId?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;
}
