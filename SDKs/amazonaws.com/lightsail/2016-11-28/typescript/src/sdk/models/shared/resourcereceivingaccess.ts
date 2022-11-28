import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceReceivingAccess
/** 
 * Describes an Amazon Lightsail instance that has access to a Lightsail bucket.
**/
export class ResourceReceivingAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;
}
