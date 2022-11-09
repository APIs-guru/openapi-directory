import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QualityFilterEnum } from "./qualityfilterenum";
import { Image } from "./image";
import { Image } from "./image";


export class CompareFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;

  @Metadata({ data: "json, name=SimilarityThreshold" })
  similarityThreshold?: number;

  @Metadata({ data: "json, name=SourceImage" })
  sourceImage: Image;

  @Metadata({ data: "json, name=TargetImage" })
  targetImage: Image;
}
