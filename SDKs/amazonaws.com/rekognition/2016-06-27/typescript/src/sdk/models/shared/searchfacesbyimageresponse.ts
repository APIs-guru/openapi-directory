import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceMatch } from "./facematch";
import { BoundingBox } from "./boundingbox";


export class SearchFacesByImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceMatches", elemType: shared.FaceMatch })
  faceMatches?: FaceMatch[];

  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @Metadata({ data: "json, name=SearchedFaceBoundingBox" })
  searchedFaceBoundingBox?: BoundingBox;

  @Metadata({ data: "json, name=SearchedFaceConfidence" })
  searchedFaceConfidence?: number;
}
