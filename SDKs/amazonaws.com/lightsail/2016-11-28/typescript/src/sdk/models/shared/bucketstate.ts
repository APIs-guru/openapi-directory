import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketState
/** 
 * Describes the state of an Amazon Lightsail bucket.
**/
export class BucketState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
