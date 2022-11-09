import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";


export class DetectFacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes?: AttributeEnum[];

  @Metadata({ data: "json, name=Image" })
  image: Image;
}
