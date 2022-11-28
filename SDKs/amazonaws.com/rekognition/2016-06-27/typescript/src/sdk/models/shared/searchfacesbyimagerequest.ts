import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";



export class SearchFacesByImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;

  @SpeakeasyMetadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;
}
