import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class ImagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];
}
