import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessKeyLastUsed
/** 
 * <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p> </note>
**/
export class AccessKeyLastUsed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastUsedDate" })
  lastUsedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
