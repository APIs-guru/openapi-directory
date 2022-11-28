import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";



export class DetectFacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: AttributeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;
}
