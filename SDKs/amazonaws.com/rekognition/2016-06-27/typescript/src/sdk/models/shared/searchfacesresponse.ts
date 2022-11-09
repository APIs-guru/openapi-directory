import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaceMatch } from "./facematch";


export class SearchFacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FaceMatches", elemType: shared.FaceMatch })
  faceMatches?: FaceMatch[];

  @Metadata({ data: "json, name=FaceModelVersion" })
  faceModelVersion?: string;

  @Metadata({ data: "json, name=SearchedFaceId" })
  searchedFaceId?: string;
}
