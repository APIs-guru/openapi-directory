import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";


export class SearchFacesByImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=FaceMatchThreshold" })
  faceMatchThreshold?: number;

  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;

  @Metadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;
}
