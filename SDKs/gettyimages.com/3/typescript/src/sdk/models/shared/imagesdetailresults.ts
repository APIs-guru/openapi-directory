import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImagesDetailResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=images" })
  images?: any;

  @Metadata({ data: "json, name=images_not_found" })
  imagesNotFound?: string[];
}
