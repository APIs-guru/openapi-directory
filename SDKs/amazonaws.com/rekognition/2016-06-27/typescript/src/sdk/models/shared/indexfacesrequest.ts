import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";



export class IndexFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "json, name=DetectionAttributes" })
  detectionAttributes?: AttributeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ExternalImageId" })
  externalImageId?: string;

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;

  @SpeakeasyMetadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;
}
