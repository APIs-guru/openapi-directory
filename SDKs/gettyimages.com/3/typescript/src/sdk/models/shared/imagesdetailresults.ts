import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImagesDetailResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: any;

  @SpeakeasyMetadata({ data: "json, name=images_not_found" })
  imagesNotFound?: string[];
}
