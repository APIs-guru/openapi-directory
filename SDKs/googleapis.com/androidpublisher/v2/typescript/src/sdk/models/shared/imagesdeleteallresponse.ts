import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class ImagesDeleteAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Image })
  deleted?: Image[];
}
