import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmpUrl } from "./ampurl";
import { AmpUrlError } from "./ampurlerror";



// BatchGetAmpUrlsResponse
/** 
 * Batch AMP URL response.
**/
export class BatchGetAmpUrlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ampUrls", elemType: AmpUrl })
  ampUrls?: AmpUrl[];

  @SpeakeasyMetadata({ data: "json, name=urlErrors", elemType: AmpUrlError })
  urlErrors?: AmpUrlError[];
}
