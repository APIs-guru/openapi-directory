import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";
import { FaceDetail } from "./facedetail";


// CelebrityDetail
/** 
 * Information about a recognized celebrity.
**/
export class CelebrityDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Face" })
  face?: FaceDetail;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Urls" })
  urls?: string[];
}
