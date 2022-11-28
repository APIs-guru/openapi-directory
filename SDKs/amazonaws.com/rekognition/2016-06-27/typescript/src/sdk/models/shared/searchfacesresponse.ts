import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";



export class SearchFacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FaceMatches", elemType: FaceMatch })
  faceMatches?: FaceMatch[];

  @SpeakeasyMetadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchedFaceId" })
  searchedFaceId?: string;
}
