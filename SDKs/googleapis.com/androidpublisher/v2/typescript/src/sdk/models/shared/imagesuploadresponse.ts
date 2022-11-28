import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class ImagesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  image?: Image;
}
