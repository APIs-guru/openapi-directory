import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1Subscription
/** 
 * Pub/Sub subscription of an environment.
**/
export class GoogleCloudApigeeV1Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
