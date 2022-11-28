import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShortBlob
/** 
 * Short Blob
**/
export class ShortBlob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
