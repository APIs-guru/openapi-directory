import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=FaceId" })
  faceId: string;

  @Metadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;

  @Metadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;
}
