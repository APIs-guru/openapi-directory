import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class RecognizeCelebritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;
}
