import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * An uploaded image. The resource for ImagesService.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=sha1" })
  sha1?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
