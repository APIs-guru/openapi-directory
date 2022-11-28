import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionManagerOutputUrl
/** 
 * Reserved for future use.
**/
export class SessionManagerOutputUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputUrl" })
  cloudWatchOutputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputUrl" })
  s3OutputUrl?: string;
}
