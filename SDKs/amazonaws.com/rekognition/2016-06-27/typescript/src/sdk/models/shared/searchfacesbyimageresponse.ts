import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";
import { BoundingBox } from "./boundingbox";



export class SearchFacesByImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceMatches", elemType: FaceMatch })
  faceMatches?: FaceMatch[];

  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchedFaceBoundingBox" })
  searchedFaceBoundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=SearchedFaceConfidence" })
  searchedFaceConfidence?: number;
}
