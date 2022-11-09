import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AmpUrl
/** 
 * AMP URL response for a requested URL.
**/
export class AmpUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=ampUrl" })
  ampUrl?: string;

  @Metadata({ data: "json, name=cdnAmpUrl" })
  cdnAmpUrl?: string;

  @Metadata({ data: "json, name=originalUrl" })
  originalUrl?: string;
}
