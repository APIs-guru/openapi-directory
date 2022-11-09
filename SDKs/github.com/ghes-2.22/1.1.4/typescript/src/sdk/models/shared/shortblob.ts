import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShortBlob
/** 
 * Short Blob
**/
export class ShortBlob extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
