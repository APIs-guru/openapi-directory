import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Image
/** 
 * An uploaded image. The resource for ImagesService.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sha1" })
  sha1?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
