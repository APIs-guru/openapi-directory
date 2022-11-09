import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";


export class IndexFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionId" })
  collectionId: string;

  @Metadata({ data: "json, name=DetectionAttributes" })
  detectionAttributes?: AttributeEnum[];

  @Metadata({ data: "json, name=ExternalImageId" })
  externalImageId?: string;

  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=MaxFaces" })
  maxFaces?: number;

  @Metadata({ data: "json, name=QualityFilter" })
  qualityFilter?: QualityFilterEnum;
}
