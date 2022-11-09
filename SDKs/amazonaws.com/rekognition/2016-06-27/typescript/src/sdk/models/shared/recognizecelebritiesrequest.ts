import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class RecognizeCelebritiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Image" })
  image: Image;
}
