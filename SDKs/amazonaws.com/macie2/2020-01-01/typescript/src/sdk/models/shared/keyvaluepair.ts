import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValuePair
/** 
 * Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
**/
export class KeyValuePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
