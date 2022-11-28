import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeEnum } from "./attributeenum";
import { Image } from "./image";
export declare class DetectFacesRequest extends SpeakeasyBase {
    attributes?: AttributeEnum[];
    image: Image;
}
