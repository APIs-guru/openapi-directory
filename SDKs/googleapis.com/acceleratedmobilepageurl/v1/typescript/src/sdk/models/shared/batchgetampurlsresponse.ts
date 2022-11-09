import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AmpUrl } from "./ampurl";
import { AmpUrlError } from "./ampurlerror";


// BatchGetAmpUrlsResponse
/** 
 * Batch AMP URL response.
**/
export class BatchGetAmpUrlsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ampUrls", elemType: shared.AmpUrl })
  ampUrls?: AmpUrl[];

  @Metadata({ data: "json, name=urlErrors", elemType: shared.AmpUrlError })
  urlErrors?: AmpUrlError[];
}
