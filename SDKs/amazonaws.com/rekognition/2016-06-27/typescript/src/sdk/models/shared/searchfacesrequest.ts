import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=FaceId" })
  faceId: string;

  @SpeakeasyMetadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;
}
