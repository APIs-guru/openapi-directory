import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketState
/** 
 * Describes the state of an Amazon Lightsail bucket.
**/
export class BucketState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
