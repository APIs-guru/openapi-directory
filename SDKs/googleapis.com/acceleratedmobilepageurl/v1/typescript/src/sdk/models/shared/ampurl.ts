import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AmpUrl
/** 
 * AMP URL response for a requested URL.
**/
export class AmpUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ampUrl" })
  ampUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=cdnAmpUrl" })
  cdnAmpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=originalUrl" })
  originalUrl?: string;
}
