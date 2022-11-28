import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QualityFilterEnum } from "./qualityfilterenum";
import { Image } from "./image";



export class CompareFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=SimilarityThreshold" })
  similarityThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceImage" })
  sourceImage: Image;

  @SpeakeasyMetadata({ data: "json, name=TargetImage" })
  targetImage: Image;
}
