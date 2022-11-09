import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SessionManagerOutputUrl
/** 
 * Reserved for future use.
**/
export class SessionManagerOutputUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputUrl" })
  cloudWatchOutputUrl?: string;

  @Metadata({ data: "json, name=S3OutputUrl" })
  s3OutputUrl?: string;
}
