import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessKeyLastUsed
/** 
 * <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p> </note>
**/
export class AccessKeyLastUsed extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastUsedDate" })
  lastUsedDate?: Date;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
